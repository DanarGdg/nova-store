import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const ApiPrice = createContext({})

function useApiPrice() {
    return useContext(ApiPrice)
}

function ApiPriceProvider({ children }) {
    const [listGame, setListGame] = useState([])
    const [listPrice, setListPrice] = useState([])
    const [idGame, setGameId] = useState('')
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    function getListGame() {
        setLoading(false)
        axios.get('http://restapi.novastore.my.id/api/price', {
            headers: {
                Authorization: `Bearer ${token}`,
            },         
        })
        .then((response) => {
            setListGame(response.data.data)
            setLoading(true)
        });
    }

    function getListPrice() {
        setLoading(false)
        const request = {
            id: idGame
        }
        return axios.get('http://restapi.novastore.my.id/api/price/list-harga', {
            headers: {
                Authorization: `Bearer ${token}`,
            },    
            params: request     
        })
        // .then((response) => {
        //     setListPrice(response.data.data)
        //     setLoading(true)
        // });
    }

    useEffect(() => {
        getListGame()
    }, [])

    const contextValue = {
        listGame, setListGame,
        loading, setLoading,
        idGame, setGameId,
        listPrice, setListPrice,
        getListPrice
    }

    return (
        <ApiPrice.Provider value={contextValue}>
            {children}
        </ApiPrice.Provider>
    )
}

export { ApiPrice, ApiPriceProvider, useApiPrice }