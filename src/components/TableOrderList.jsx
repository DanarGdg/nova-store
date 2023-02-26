import axios from 'axios';
import React from 'react'
import { useApiOrderList } from '../context/api/OrderListApi';

function TableOrderList() {
    const context = useApiOrderList()
    console.log(context.orderList)

  return (
    <table className='table-order-list'>
        <tbody>
            <tr>
                <th>Id</th>
                <th>Game</th>
                <th>Item</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
            </tr>

            {
                context.orderList.map((item, index) => (
                    <tr key={index}>
                        <td>AAXXA</td>
                        <td>Mobile Legends</td>
                        <td>10 Diamonds</td>
                        <td>Rp 10000</td>
                        <td>2022-09-10 17:03:58</td>
                        <td><div className='status status_success'>SUCCESS</div></td>
                    </tr>
                ))
            }
            
            <tr>
                <td>AAXXA</td>
                <td>Mobile Legends</td>
                <td>10 Diamonds</td>
                <td>Rp 10000</td>
                <td>2022-09-10 17:03:58</td>
                <td><div className='status status_success'>SUCCESS</div></td>
            </tr>
            <tr>
                <td>AAXXA</td>
                <td>Mobile Legends</td>
                <td>10 Diamonds</td>
                <td>Rp 10000</td>
                <td>2022-09-10 17:03:58</td>
                <td><div className='status status_pending'>PENDING</div></td>
            </tr>
            <tr>
                <td>AAXXA</td>
                <td>Mobile Legends</td>
                <td>10 Diamonds</td>
                <td>Rp 10000</td>
                <td>2022-09-10 17:03:58</td>
                <td><div className='status status_failed'>FAILED</div></td>
            </tr>
            <tr>
                <td>AAXXA</td>
                <td>Mobile Legends</td>
                <td>10 Diamonds</td>
                <td>Rp 10000</td>
                <td>2022-09-10 17:03:58</td>
                <td><div className='status status_success'>SUCCESS</div></td>
            </tr>
            <tr>
                <td>AAXXA</td>
                <td>Mobile Legends</td>
                <td>10 Diamonds</td>
                <td>Rp 10000</td>
                <td>2022-09-10 17:03:58</td>
                <td><div className='status status_success'>SUCCESS</div></td>
            </tr>
            <tr>
                <td>AAXXA</td>
                <td>Mobile Legends</td>
                <td>10 Diamonds</td>
                <td>Rp 10000</td>
                <td>2022-09-10 17:03:58</td>
                <td><div className='status status_failed'>FAILED</div></td>
            </tr>
            <tr>
                <td>AAXXA</td>
                <td>Mobile Legends</td>
                <td>10 Diamonds</td>
                <td>Rp 10000</td>
                <td>2022-09-10 17:03:58</td>
                <td><div className='status status_success'>SUCCESS</div></td>
            </tr>
        </tbody>
    </table>
  )
}

export default TableOrderList