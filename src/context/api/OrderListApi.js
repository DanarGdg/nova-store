import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const ApiOrderList = createContext({})

function useApiOrderList() {
    return useContext(ApiOrderList)
}

function ApiOrderListProvider({ children }) {
    const [search, setSearch] = useState('')
    const [orderList, setOrderList] = useState([])
    const [searchOrderList, setSearchOrderList] = useState([])
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('token');

    function getOrderList() {
        setLoading(false)
        axios.get('http://restapi.novastore.my.id/api/order', {
            headers: {
                Authorization: `Bearer ${token}`,
        },            
        }).then((response) => {
            setOrderList(response.data.data)
            setLoading(true)
        }).catch((error) => {
            console.log(error)
        });
    }

    function handleSearch() {
        const request = {
            search: search
        }
        setLoading(false)
        return axios.get('http://restapi.novastore.my.id/api/order/search', {
            headers: {
                Authorization: `Bearer ${token}`,
            },            
            params: request
        })
    }

    useEffect(() => {
        getOrderList()
    }, [])

    const contextValue = {
        orderList, setOrderList,
        search, setSearch,
        handleSearch,
        loading, setLoading
    }

    return (
        <ApiOrderList.Provider value={contextValue}>
            {children}
        </ApiOrderList.Provider>
    )
}

export { ApiOrderList, ApiOrderListProvider, useApiOrderList }