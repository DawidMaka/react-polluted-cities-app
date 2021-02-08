import React from 'react'

type DatalistProps = {
  countries: string[]
  id: string
}

const Datalist = React.memo<DatalistProps>(({ countries, ...props }) => (
  <datalist {...props}>
    {countries.map((country) => <option key={country}>{country}</option>)}
  </datalist>
))

export default Datalist
