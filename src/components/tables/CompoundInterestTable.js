import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const CompoundInterestTable = ({ startingBalance, endBalance, years, interests }) => {
   
  const columns = useMemo(
    () => [
      {
        Header: "Compound Interest Table",
        columns: [
          {
            Header: "Year",
            accessor: "year",
          },
          {
            Header: "Starting Balance",
            accessor: "startingBalance",
          },
          {
            Header: "Interest",
            accessor: "interest",
          },
          {
            Header: "End Balance",
            accessor: "endBalance",
          },
        ],
      },
    ],
    []
  );

  const generateData = () => {
    const data = [];
    for (let i = 0; i <= years.length - 1; i++) {
      data.push({
        year: years[i],
        startingBalance: startingBalance[i],
        interest: interests[i],
        endBalance: endBalance[i],
      });
    }
    return data
  };

  const data = useMemo(() => generateData(),[years,startingBalance,interests,years])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////  The below jsx is related to 'react-table' library

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

export default CompoundInterestTable;
