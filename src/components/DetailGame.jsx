import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import line from '../assets/line-detail.svg'
import '../styles/detail-game.css'
import specialBorder from '../assets/special-border.svg'
import googlePlay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'
import { useParams } from 'react-router'
import axios from 'axios'
import TimelineTransaction from './TimelineTransaction'

function DetailGame() {
    let userId = useParams()
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        function getData() {
            const url = "http://restapi.novastore.my.id/api/home/show/" + userId.id
            setLoading(false);
            axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    console.log(response);
                    setDetail(response.data.data);
                    setLoading(true);
                }).catch((error) => {
                    console.log(error);
                })
        }
        getData();
    }, [userId]);

    return (
        <div className='detail-game'>
            <Navbar />
            <img src={line} className='line' />

            <div className='wrapper-detail'>
                <div className='text'>
                    <img src={specialBorder} />
                    <h1>{detail.nama}</h1>
                    <p>{detail.deskripsi}</p>
                    <div className='platform'>
                        <img src={appstore} alt="" />
                        <img src={googlePlay} alt="" />
                    </div>
                </div>

                <div className='transaction'>
                    <TimelineTransaction/>
                    dadkoso
                </div>
            </div>
        </div>
    )
}

export default DetailGame