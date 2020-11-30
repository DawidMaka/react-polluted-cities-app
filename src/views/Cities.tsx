import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import { Measurements, Pages, PollutedCitiesResponse, WikipediaResponse } from '../base/types';
import fetchPollutionData from 'api/openaq';
import fetchWikipediaData from 'api/wikipedia';
import PageContext from 'context';
import { countries, abbrList } from 'base/variables';
import CitiesTemplate from 'templates/CitiesTemplate';
import CityList from 'components/CityList/CityList';

function filterByDuplicates<T extends keyof Measurements>( items: Measurements[], value: T ) {
  const arr = items.filter( ( item, index, array ) => {
    return index === array.findIndex( ( obj ) => {
      return obj[ value ] === item[ value ];
    } );
  } );

  arr.splice( 10 );
  return arr;
}

const getTitles = ( items: Measurements[] ) => {
  const str = items.map( ( item ) => {
    return item.city.split( '/' )[ 0 ];
  } );

  return encodeURIComponent( str.join( '|' ) );
};

const getAbbr = ( abbr: string ) => {
  const value = abbr.toLowerCase();
  const index = countries.findIndex( ( country ) => {
    return country.toLowerCase() === value;
  } );

  return abbrList[ index ];
};

const useDataApi = () => {
  const [ data, setData ] = useState<Pages[]>( [] );
  const [ isLoading, setIsLoading ] = useState( false );
  const [ isError, setIsError ] = useState( '' );

  const fetchData = async ( value: string ) => {
    const abbr = getAbbr( value );

    if ( abbr !== undefined ) {
      setData( [] );
      setIsError( '' );
      setIsLoading( true );
      try {
        const pollutedCities: AxiosResponse<PollutedCitiesResponse> = await fetchPollutionData( abbr );
        const removedDuplicates = filterByDuplicates( pollutedCities.data.results, 'city' );
        const titles = getTitles( removedDuplicates );
        const wikipediaResponse: AxiosResponse<WikipediaResponse> = await fetchWikipediaData( titles );
        const { data: { query: { pages } } } = wikipediaResponse;

        setIsLoading( false );
        setData( Object.values( pages ) );
      } catch ( error ) {
        setIsError( 'Something went wrong, try again...' );
        setIsLoading( false );
      }
    } else {
      setIsError( 'Wrong country provided' );
    }
  };

  return [ data, isLoading, isError, fetchData ] as [Pages[], boolean, string, ( value: string ) => void];
};

const Cities = () => {
  const [ data, isLoading, isError, doFetch ] = useDataApi();

  return (
    <PageContext.Provider
      value={{
        doFetch,
        isLoading
      }}
    >
      <CitiesTemplate isError={isError} isLoading={isLoading}>
        <CityList cities={data} />
      </CitiesTemplate>
    </PageContext.Provider>
  );
};

export default Cities;
