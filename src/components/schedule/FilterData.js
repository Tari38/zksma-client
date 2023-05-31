import React, { useState } from "react";
import ScheduleTable from "./DevTable";
import { eventsData } from "./data/data-source";
// import styles from "./DataTable.module.scss";


const FilterData = ({ data }) => {
  const [filteredData, setFilteredData] = useState("");
  
  function filteration(data, value) {
    //   for (const [key, value] of Object.entries([eventsData])) {
      //     console.log(`${key}: ${value}`);
      // }    
      const newarr = data.filter((item) => {
        if (!value) return true;
        if (
          item.rowIndex.toLowerCase().includes(value.toLowerCase()) ||
          item.column_id.toLowerCase().includes(value.toLowerCase()) ||
          item.venueID.toLowerCase().includes(value.toLowerCase())
          ) {
            return true;
          }
          return false;
        }
        );
        return newarr;
      }
      
      return (
        <>      
      <ScheduleTable data={filteration(data, filteredData)} />
    </>
  );
};

export default FilterData;
