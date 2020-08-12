import React, { useState } from 'react';
import fetchPollutionData from 'api/openaq';
import fetchWikipediaData from 'api/wikipedia';
import PageContext from 'context';
import { countries, abbrList } from 'base/variables';
import CitiesTemplate from 'templates/CitiesTemplate';
import CityList from 'components/CityList/CityList';

const removeDuplicates = items => {
  const arr = items.filter(
    (item, index, array) => index === array.findIndex(element => element.city === item.city),
  );

  arr.splice(10);

  return arr;
};

const getTitles = items => {
  const str = items.map(item => item.city.split('/')[0]);

  return encodeURIComponent(str.join('|'));
};

const getAbbr = string => {
  const value = string.toLowerCase();
  const index = countries.findIndex(country => country.toLowerCase() === value);

  return abbrList[index];
};

const useDataApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetchData = async string => {
    const abbr = getAbbr(string);

    if (abbr !== undefined) {
      setData([]);
      setIsError('');
      setIsLoading(true);

      try {
        const {
          data: { results },
        } = await fetchPollutionData(abbr);
        const removedDuplicates = removeDuplicates(results);
        const titles = getTitles(removedDuplicates);
        const {
          data: {
            query: { pages },
          },
        } = await fetchWikipediaData(titles);

        setIsLoading(false);
        setData(Object.values(pages));
      } catch (error) {
        setIsError('Something went wrong, try again...');
        setIsLoading(false);
      }
    } else {
      setIsError('Wrong country provided');
    }
  };

  return [{ data, isLoading, isError }, fetchData];
};

const Cities = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataApi();

  return (
    <PageContext.Provider
      value={{
        doFetch,
        isLoading,
      }}
    >
      <CitiesTemplate isError={isError} isLoading={isLoading}>
        <CityList cities={data} />
      </CitiesTemplate>
    </PageContext.Provider>
  );
};

export default Cities;
