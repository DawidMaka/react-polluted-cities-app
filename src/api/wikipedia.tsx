import axios from 'axios'
import { wikipediaUrl } from 'base/variables'
import createQueryParams from 'utils'

const defaultParams = {
  action: 'query',
  format: 'json',
  explaintext: '',
  redirects: 1,
  prop: 'extracts',
  exintro: '',
  exsentences: 2,
}

const fetchWikipediaData = (titles: string) => {
  const queryParams = { ...defaultParams, titles }
  const params = createQueryParams(queryParams)

  return axios(`${wikipediaUrl}&${params}`)
}

export default fetchWikipediaData
