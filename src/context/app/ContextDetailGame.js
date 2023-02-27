import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const ContextDetailGame = createContext({})

function useContextDetailGame() {
    return useContext(ContextDetailGame)
}

function DetailGameProvider({ children }) {
    const [activeUserId, setActive1UserId] = useState(false)
    const [activeZoneId, setActive1ZoneId] = useState(false)
    const [zoneID, setZoneId] = useState(null)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [idUser, setIdUser] = useState(null)
    const [selectedItem, setSelectedItem] = useState({
        id: '',
        price: ''
    })
    const contextValue = {
        activeUserId, setActive1UserId,
        activeZoneId,setActive1ZoneId,
        zoneID, setZoneId,
        active2, setActive2,
        idUser, setIdUser,
        selectedItem, setSelectedItem
    }

    return (
        <ContextDetailGame.Provider value={contextValue}>
            {children}
        </ContextDetailGame.Provider>
    )
}

export { ContextDetailGame, DetailGameProvider, useContextDetailGame }