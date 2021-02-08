import { AxiosResponse } from 'axios'
import {
  Measurements,
  Pages,
  PollutedCitiesResponse,
  PollutedCitiesQueries,
  WikipediaResponse,
} from 'base/types'
import React, { useState } from 'react'
import fetchPollutionData from 'api/openaq'
import fetchWikipediaData from 'api/wikipedia'
import { countries, abbrList } from 'base/variables'
import PollutedCityList from 'components/PollutedCityList'
import SearchForm from 'components/SearchForm'
import Datalist from 'components/Datalist'
import Spinner from 'components/styledComponents/Spinner'
import ErrorMessage from 'components/styledComponents/ErrorMessage'
import Button from 'components/styledComponents/Button'

function filterByDuplicates<T extends keyof Measurements>(items: Measurements[], value: T) {
  items.filter((item, index, array) => index === array.findIndex((obj) => (
    obj[value] === item[value]
  )))
  items.splice(10)

  return items
}

function setQuery<T extends keyof PollutedCitiesQueries>(items: Measurements[], value: T) {
  const str = items.map((item) => item[value].split('/')[0])

  return encodeURIComponent(str.join('|'))
}

const getAbbr = (abbr: string) => {
  const value = abbr.toLowerCase()
  const index = countries.findIndex((country) => country.toLowerCase() === value)

  return abbrList[index]
}

const useDataApi = () => {
  const [data, setData] = useState<Pages[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async (value: string) => {
    const abbr = getAbbr(value)

    if (abbr !== undefined) {
      setData([])
      setError('')
      setIsLoading(true)
      try {
        const pollutedCitiesData: AxiosResponse<PollutedCitiesResponse> = await fetchPollutionData(abbr)
        const { data: { results } } = pollutedCitiesData
        const filtered = filterByDuplicates(results, 'city')
        const titles = setQuery(filtered, 'city')
        const wikipediaData: AxiosResponse<WikipediaResponse> = await fetchWikipediaData(titles)
        const { data: { query: { pages } } } = wikipediaData

        setIsLoading(false)
        setData(Object.values(pages))
      } catch (err) {
        setError('Something went wrong, try again...')
        setIsLoading(false)
      }
    } else {
      setError('Wrong country provided')
    }
  }

  return [data, isLoading, error, fetchData] as [Pages[], boolean, string, (value: string) => void]
}

const Home = () => {
  const [data, isLoading, error, doFetch] = useDataApi()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const inputValue = (form.querySelector('input[name=\'country\']') as HTMLInputElement).value
    doFetch(inputValue)
  }

  return (
    <>
      <header>
        <h1>The most polluted cities</h1>
        <p>Check 10 the most polluted cities in Poland, Germany, Spain or France.</p>
      </header>
      <main>
        <ErrorMessage>{error}</ErrorMessage>
        <SearchForm onSubmit={handleSubmit}>
          <Datalist
            id="countries"
            countries={countries}
          />
          <Button
            type="submit"
            disabled={isLoading}
          >
            Search
          </Button>
        </SearchForm>
        {isLoading ? <Spinner /> : null}
        <PollutedCityList cities={data} />
      </main>
    </>
  )
}

export default Home
