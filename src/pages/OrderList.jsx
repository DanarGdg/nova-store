import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import TableOrderList from '../components/TableOrderList'
import '../styles/orderList.css'

function OrderList() {
  return (
    <div className='order-list'>
      <Navbar/>
      <p className='text'>&gt;&gt;&gt; Cek Transaksi</p>
      <Search placeholder='ID Transaction Example: WOGWOGWOG' className='search'/>
      <p className='text'>&gt;&gt;&gt; Riwayat Transaksi</p>
      <TableOrderList/>
      <Footer/>
    </div>
  )
}

export default OrderList