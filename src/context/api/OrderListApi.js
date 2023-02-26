import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const ApiOrderList = createContext({})

function useApiOrderList() {
    return useContext(ApiOrderList)
}

function ApiOrderListProvider({ children }) {
    const [search, setSearch] = useState('')
    const [orderList, setOrderList] = useState([])
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('token');

    function getOrderList() {
        axios.get('http://restapi.novastore.my.id/api/order', {
            headers: {
                Authorization: `Bearer ${token}`,
            },            
        }).then((response) => {
            setOrderList(response.data.data)
        }).catch((error) => {
            console.log(error)
        });
    }

    function searchOrderList() {
        return axios.get('http://restapi.novastore.my.id/api/order/search', {
            headers: {
                Authorization: `Bearer ${token}`,
            },            
            search: search
        })
    }

    useEffect(() => {
        getOrderList()
    }, [])

    const contextValue = {
        orderList, setOrderList,
        search, setSearch,
        searchOrderList,
        loading, setLoading
    }

    return (
        <ApiOrderList.Provider value={contextValue}>
            {children}
        </ApiOrderList.Provider>
    )
}

export { ApiOrderList, ApiOrderListProvider, useApiOrderList }