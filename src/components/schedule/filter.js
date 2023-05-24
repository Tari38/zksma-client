import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { venueData } from './data-source'

export const GlobalFilter = ({ filter, setFilter }) => {
  const [selectedVenue, setSelectedVenue] = useState(filter)
  const onChange = useAsyncDebounce(selectedVenue => {
    setFilter(selectedVenue || undefined)
  }, 1000)
  return (
    <select id="selectedVenue" className="selector table-filter" value={selectedVenue}>
        {venueData.map((data) => {
            if (!data.venueID) return <option defaultValue={null} hidden >Select a Venue</option>;
            return (
                <option 
                id={data.shortcode} value={data.name}
                  onChange={e => {
                    setSelectedVenue(e.target.selectedVenue);
                    onChange(e.target.selectedVenue);
                  }}
                  >{data.name}</option>
            )
        })}
    </select>
  )
}