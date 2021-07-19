import React from "react";

const SavingsTable = ({years, yearlyEndBalances, contribution, interests}) => {
    function createTableBody() {
        let savingsTable = [];
        for (let i = 0; i < years.length; i++) {
          savingsTable.push(
            <tr key={years[i]}>
              <td>{years[i]}</td>
              <td>{contribution[i]}</td>
              <td>{interests[i]}</td>
              <td>{yearlyEndBalances[i]}</td>
            </tr>
          );
        }
    
        return savingsTable;
      }
    
      return (
        <div> 
          <table>
            {/* Table Headers */}
            <thead>
              <tr>
                <th>Year</th>
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