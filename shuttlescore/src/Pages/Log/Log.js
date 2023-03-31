import "./Log.css"
import Data from "./Data.json"
import * as React from "react";
import { useTable } from "react-table";

function Log() {
    const data = React.useMemo(() => Data, []);
    const columns = React.useMemo(() => [
        {
            Header: "Date",
            accessor: "date",
        },
        {
            Header: "Opponent",
            accessor: "opponent"
        },
        {
            Header: "Score",
            accessor: "score"
        },
        {
            Header: "Result",
            accessor: "result"
        }
    ], []
    );
    
const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

    return(
        <div className="logPage">
            <div className="logheader">
                <h1>Match Log</h1>
            </div>
            <div className="logdescription">
                <h2>Here you will be able to view your match history!</h2>
            </div>
            <div className="table">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups?.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.hedaers?.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows?.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells?.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Log;