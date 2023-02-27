import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const ApiHome = createContext({})

function useApiHome() {
    return useContext(ApiHome)
}

function ApiHomeProvider({ children }) {
    const [gameData, setGameData] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    async function gameDataApi() {
        setLoading(false)
        axios.get('http://restapi.novastore.my.id/api/home', {
            headers: {
                Authorization: `Bearer ${token}`,
            },         
        })
            .then((response) => {
                setGameData(response.data.data)
                setLoading(true)
            });
    }

    function searchApi() {
        setLoading(false)
        const request = {
            search: search
        }
        return axios.get('http://restapi.novastore.my.id/api/home/search', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: request
        })
    }

    useEffect(() => {
        gameDataApi()
    }, [])

    const contextValue = {
        gameData, setGameData,
        search, setSearch,
        searchApi,
        loading, setLoading
    }

    return (
        <ApiHome.Provider value={contextValue}>
            {children}
        </ApiHome.Provider>
    )
}

export { ApiHome, ApiHomeProvider, useApiHome }