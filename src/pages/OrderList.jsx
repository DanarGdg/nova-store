import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import TableOrderList from '../components/TableOrderList'
import { useApiOrderList } from '../context/api/OrderListApi'
import '../styles/orderList.css'

function OrderList() {
  const context = useApiOrderList()

  return (
    <div className='order-list'>
      <Navbar />
      <p className='text'>&gt;&gt;&gt; Cek Transaksi</p>
      <Search placeholder='ID Transaction Example: WOGWOGWOG' className='search'
        func={context.setSearch}
        searchFunc={context.searchOrderList}
        value={context.search}
        loadingfunc={context.setLoading}
        setData={context.setOrderList}
      />
      <p className='text'>&gt;&gt;&gt; Riwayat Transaksi</p>
      <TableOrderList />
      <Footer />
    </div>
  )
}

export default OrderList