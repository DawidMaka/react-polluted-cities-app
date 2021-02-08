import styled from 'styled-components'
import { Pages } from 'base/types'
import React from 'react'

const StyledPollutedCityList = styled.ul`
  margin-top: 40px;

  li {
    margin-bottom: -1px;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);

    :first-child {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }

    :last-child {
      margin-bottom: 0;
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
  }
`

const PollutedCityList = React.memo(({ cities }: { cities: Pages[] }) => (
  <>
    {cities.length ? (
      <StyledPollutedCityList>
        {cities.map((city) => (
          <li key={city.pageid}>
            <h2>{city.title}</h2>
            <p>{city.extract}</p>
          </li>
        ))}
      </StyledPollutedCityList>
    ) : null}
  </>
))

export default PollutedCityList
