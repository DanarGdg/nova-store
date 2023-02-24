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
import Footer from './Footer'
import questionMark from '../assets/question-mark.svg'
import { useContextDetailGame } from '../context/app/ContextDetailGame'
import TopUpGrid from './TopUpGrid'
import wallet from '../assets/wallet.svg'

function DetailGame() {
    let userId = useParams()
    const [detail, setDetail] = useState([]);
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
    const context = useContextDetailGame()
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
                    setDetail(response.data.data);
                    setItems(response.data.item)
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
                    <TimelineTransaction />
                    <div className='wrapper-input-items'>
                        <div className='wrapper-input'>
                            <h1>Masukkan ID anda</h1>
                            <div>
                                <input 
                                    onFocus={() => context.setActive1(true)} 
                                    onChange={(e) => context.setIdUser(e.target.value)}
                                />
                                <img src={questionMark} />
                            </div>
                        </div>
                        <div className='wrapper-items'>
                            <h1>Pilih Nominal Top Up</h1>
                            <div className='wrapper-topup-grid'>
                                {loading ? 
                                    <TopUpGrid 
                                        items={items} 
                                        loading={loading} 
                                        selectedItem={context.selectedItem} 
                                        setSelectedItem={context.setSelectedItem}/> 
                                : 'loading'}
                            </div>
                        </div>
                        <div className='wrapper-total'>
                            <div>
                                <img src={wallet} />
                                <h3>Harga</h3>
                            </div>
                            <p>Rp. {context.selectedItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                        </div>
                        <div class="btn-login">
                            <input type="submit" value='Beli' />
                        </div>                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailGame