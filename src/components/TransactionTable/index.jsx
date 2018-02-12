import React from 'react'

const TransactionTable = ({ data }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>kurs (PLN)</th>
        <th>ilosc (BTC)</th>
        <th>razem (PLN)</th>
      </tr>
    </thead>
    <tbody>
      {data.map(row => (
        <tr>
          <td>{row.price}</td>
          <td>{row.quantity}</td>
          <td>{row.sum}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default TransactionTable
