import React, {useMemo} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useTable, useFilters, useGlobalFilter } from "react-table";
import { zksmahqData, rowData, columnData } from "./data-source";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./filter";
// import { ColumnFilter } from './ColumnFilter';

import "./kids/schedule.css";
import "./css/schedule_base.css";

const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => zksmahqData, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
      } = useTable(
        {
          columns,
          data
        },
        useFilters,
        useGlobalFilter
      )
    
      const { globalFilter } = state

      return (
        <>
    <GlobalFilter id="selectedVenue" className="selector table-filter" filter={globalFilter} setFilter={setGlobalFilter} />
        <>
        <table className="zks-shortcode-table zks-theme-mode"  data-hide_empty_row="1" {...getTableProps()}>
            {columnData.map((data) => {
                if(!data.column_id) 
                    return <th><FontAwesomeIcon icon={faCalendarDays} style={{color: "#ffffff",}} />
                                        </th>
                    return (
                        <>  
                        <thead id="schedule_base_head">
                            {headerGroups.map((headerGroup) => (
                                <tr className="zks-shortcode-row" {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map( column => (
                                            <th {...column.getHeaderProps()}>{column.render("Header")}
                                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                                            </th>

                                        ))
                                    }
                                </tr>
                                ))}
                        </thead>               
                    
                    
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return(

                    <tr className="zks-shortcode-row" {...row.getRowProps()}>
                        {
                            row.cells.map( cell => {
                                return <td className="zks-shortcode-hours" colSpan="1" data-index={rowData.rowIndex} {...cell.getCellProps()}>{cell.render("Cell")}</td>

                            })
                        }
                    </tr>
                            )
                        })
                    }
                </tbody>
                </>
                )}
            )}

            </table>
        </>
        </>
    )
}

export default BasicTable;