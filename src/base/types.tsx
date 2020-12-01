export interface PollutedCitiesResponse {
    meta: {
      name: string;
      license: string;
      website: string;
      page: number;
      limit: number;
      found: number;
    };
    results: Measurements[];
  }

export interface Measurements {
    city: string,
    coordinates: {
        latitude: number,
        longitude: number
    },
    country: string,
    date: {
        local: string,
        utc: string,
    },
    location: string,
    parameter: string,
    unit: string,
    value: number
}

export interface WikipediaResponse {
    batchcomplete: string;
    query: {
      pages: {
        [key: string]: Pages
      }
    }
  }

export interface Pages {
    extract: string;
    ns: number;
    pageid: number;
    title: string;
}
