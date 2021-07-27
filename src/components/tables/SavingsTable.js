import React from "react";

const SavingsTable = ({years, yearlyEndBalances, contribution, interests}) => {
    function createTableBody() {
        let savingsTable = [];
        for (let i = 0; i < years.length; i++) {
          savingsTable.push(
            <tr key={years[i]}>
              <td>{years[i]}</td>

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