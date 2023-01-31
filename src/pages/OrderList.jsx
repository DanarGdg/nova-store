import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import TableOrderList from '../components/TableOrderList'
import '../styles/orderList.css'

function OrderList() {
  return (
    <div className='order-list'>
      <Navbar/>
      <p>&gt;&gt;&gt; Cek Transaksi</p>
      <Search placeholder='ID Transaction Example: WOGWOGWOG' className='search'/>
      <p>&gt;&gt;&gt; Riwayat Transaksi</p>
      <TableOrderList/>
    </div>
  )
}

export default OrderList