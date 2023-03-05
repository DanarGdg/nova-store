import React from "react"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Title from '../../components/Title'
import '../../styles/profile.css'
import PaymentContainer from '../../components/PaymentContainer'
import { useNavigate } from "react-router"
import axios from "axios"
import { Link } from "react-router-dom"
import { useProfileApi } from "../../context/api/ProfileApi"
import Loading from "../../components/Loading"

function Profile() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const context = useProfileApi()
    
    function logout() {
        context.setLoading(false)
        axios.get('http://restapi.novastore.my.id/api/logout', {
            headers: {
                Authorization: `Bearer ${token}`,
            },     
        }).then((response) => {
            localStorage.removeItem("token");
            context.setLoading(true)
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="profile">
            <div>
                <Navbar />
            </div>

            <div className="row-container">
                <Title message={`BOOT PROFILE: HELLO, ${context.profileData.user?.name}`} />
                <Link to={'/edit-profile'}>
                    <div className="btn">EDIT INFO</div>
                </Link>
                <div className="btn" onClick={logout}>LOGOUT</div>
            </div>
            <div className="box">
                {context.loading ? <h2 className='pop-up-text'>{context.profileData.user?.name}</h2> : <Loading/>}
                <img className="img-user threed-effect" src={context.profileData.user?.pf_avatar} alt="" />
            </div>
            <div className="history-header">
                <h1 className="history-tittle">
                    HISTORY PAYMENT
                </h1>
                <div className="divider"></div>
            </div>
            <Title message={`Payment this month: ${context.profileData['history-payment']?.length} transaction`} />
            <PaymentContainer />
            <Footer />
        </div>
    )
}

export default Profile