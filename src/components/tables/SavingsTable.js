import React from "react";
import "./tables-styles.scss";

const SavingsTable = ({years, yearlyStartingBalances, yearlyEndBalances, contribution, interests}) => {
    function createTableBody() {
        let savingsTable = [];
        for (let i = 0; i < years.length; i++) {
          savingsTable.push(
            <tr key={years[i]}>
              <td>{years[i]}</td>

              <td>
                {
                  yearlyStartingBalances[i].toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                  })
                }
              </td>

              <td>
                {
                  contribution[i].toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                  })
                }
              </td>

              <td>{
                  interests[i].toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                  })
                }</td>

              <td>{
                  yearlyEndBalances[i].toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                  })
                }</td>
            </tr>
          );
        }
    
        return savingsTable;
      }
    
      return (
        <div> 
          <table className="savings-table">
            {/* Table Headers */}
            <thead>
              <tr>
                <th>Year</th>
                <th>Starting Balance</th>
                <th>Contribution</th>
                <th>Interest</th>
                <th>End Balance</th>
              </tr>
            </thead>

            {/* Table Data */}
            <tbody>{createTableBody()}</tbody>
          </table>
        </div>
      );
}

export default SavingsTable;