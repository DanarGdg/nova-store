import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

const ApiProfile = createContext({})

function useProfileApi() {
    return useContext(ApiProfile)
}

function ApiProfileProvider({ children }) {
    const [profileData, setProfileData] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [avatar, setAvatar] = useState('')
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    function getProfile() {
        axios.get('http://restapi.novastore.my.id/api/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            setProfileData(response.data.data)
            setName(response.data.data.user.name)
            setEmail(response.data.data.user.email)
            setPhoneNumber(response.data.data.user.no_hp)
            setAvatar(response.data.data.user.pf_avatar)
        }).catch((error) => {
            console.log(error)
        });
    }

    const formData = new FormData();
    function handleEditProfile(e) {
        e.preventDefault();
        if (avatar?.type) {
            formData.append('name', name);
            formData.append('avatar', avatar);
            formData.append('no_hp', phoneNumber);
        } else {
            formData.append('name', name);
            formData.append('no_hp', phoneNumber);
        }
        axios.post('http://restapi.novastore.my.id/api/profile/edit-profile', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response)
            navigate('/profile')
            getProfile()
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        getProfile()
    }, [])

    const contextValue = {
        profileData, setProfileData,
        name, setName,
        email, setEmail,
        password, setPassword,
        phoneNumber, setPhoneNumber,
        avatar, setAvatar,
        loading, setLoading,
        handleEditProfile,
    }

    return (
        <ApiProfile.Provider value={contextValue}>
            {children}
        </ApiProfile.Provider>
    )
}

export { ApiProfile, ApiProfileProvider, useProfileApi }