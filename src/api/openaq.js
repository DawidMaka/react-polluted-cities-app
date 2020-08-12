import axios from 'axios';
import { openaqUrl } from 'base/variables';
import { createQueryParams } from 'utils';

const setDate = date => {
  const year = date.getUTCFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);

  return `${year}-${month}-${day}`;
};

const limit = 500;
const measurements = '/measurements';

const defaultParams = {
  limit,
  order_by: 'value',
  sort: 'desc',
  parameter: 'pm25',
  date_from: setDate(new Date()),
};

const fetchPollutionData = country => {
  const queryParams = { ...defaultParams, country };
  const params = createQueryParams(queryParams);

  return axios(`${openaqUrl}${measurements}?${params}`);
};

export default fetchPollutionData;
