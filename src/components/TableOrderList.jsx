import React from 'react'

function TableOrderList() {
  return (
    <table className='table-order-list'>
        <tr>
            <th>Id</th>
            <th>Game</th>
            <th>Item</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
        </tr>

        <tr>
            <td>AAXXA</td>
            <td>Mobile Legends</td>
            <td>10 Diamonds</td>
            <td>Rp 10000</td>
            <td>2022-09-10 17:03:58</td>
            <td>SUCCESS</td>
        </tr>
        <tr>
            <td>AAXXA</td>
            <td>Mobile Legends</td>
            <td>10 Diamonds</td>
            <td>Rp 10000</td>
            <td>2022-09-10 17:03:58</td>
            <td>SUCCESS</td>
        </tr>
    </table>
  )
}

export default TableOrderList