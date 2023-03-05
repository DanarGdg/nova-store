import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import line from '../assets/line-detail.svg'
import '../styles/detail-game.css'
import specialBorder from '../assets/special-border.svg'
import googlePlay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import TimelineTransaction from './TimelineTransaction'
import Footer from './Footer'
import questionMark from '../assets/question-mark.svg'
import { useContextDetailGame } from '../context/app/ContextDetailGame'
import TopUpGrid from './TopUpGrid'
import wallet from '../assets/wallet.svg'
import Loading from './Loading'

function DetailGame() {
    const navigate = useNavigate()
    let userId = useParams()
    const [detail, setDetail] = useState([]);
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [showModalPay, setShowModalPay] = useState(false)
    const [snapToken, setSnapToken] = useState('')
    
    const context = useContextDetailGame()
    const token = localStorage.getItem("token");

    useEffect(() => {
        const scriptSnap = document.createElement('script');

        scriptSnap.type = 'text/javascript';
        scriptSnap.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        scriptSnap.setAttribute('data-client-key', 'SB-Mid-client-DafhZZgwaUKeiMzG')

        document.body.appendChild(scriptSnap);
      
        return () => {
          document.body.removeChild(scriptSnap);
        }
    },[])

    useEffect(() => {
        const scriptFunctionSnap = document.createElement('script');

        scriptFunctionSnap.type = 'text/javascript';
        scriptFunctionSnap.innerHTML = `
            var payButton = document.getElementById('pay-button');
            payButton.addEventListener('click', function () {
              snap.pay('${snapToken}');
            });    
        `
        console.log(snapToken);
        document.body.appendChild(scriptFunctionSnap);
      
        return () => {
          document.body.removeChild(scriptFunctionSnap);
        }
    },[snapToken])

    useEffect(() => {
        function getData() {
            const url = "http://restapi.novastore.my.id/api/home/show/" + userId.id
            setLoading(false)
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

    function handleCreateTransaction(e) {
        e.preventDefault()
        setLoading(false)
        setShowModal(false)
        const formData = new FormData();
        formData.append('game_id', parseInt(detail.id));
        formData.append('item_id', parseInt(context.selectedItem.id));
        formData.append('id_user', parseInt(context.idUser));
        formData.append('id_zone', context.zoneID);
        formData.append('harga', parseInt(context.selectedItem.price));

        const params = {
            game_id: parseInt(detail.id),
            item_id: parseInt(context.selectedItem.id),
            id_user: parseInt(context.idUser),
            id_zone: context.zoneID,
            harga: parseInt(context.selectedItem.price),
        }

        let url = token ? 'http://restapi.novastore.my.id/api/payment-auth' : 'http://restapi.novastore.my.id/api/payment'

        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            params
        }).then((response) => {
            console.log(response)
            setSnapToken(response.data.snap_token)
            setShowModalPay(true)
            setLoading(true)
        }).catch((error) => {
            console.log(error)
        });
    }

    function checkTimeLine(){
        if(context.activeUserId && context.idUser && context.activeZoneId && context.zoneID && context.active2){
            return true
        }else{
            return false
        }
    }

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
                                    onFocus={() => context.setActive1UserId(true)}
                                    onChange={(e) => context.setIdUser(e.target.value)}
                                    type='text'
                                />
                                <input
                                    onFocus={() => context.setActive1ZoneId(true)}
                                    onChange={(e) => context.setZoneId(e.target.value)}
                                    placeholder='Zone ID'
                                    type='text'
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
                                        setSelectedItem={context.setSelectedItem} />
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
                        <button disabled={checkTimeLine() ? false : true} className="btn-login" onClick={() => setShowModal(true)}>
                            Beli
                        </button>
                        {showModal && checkTimeLine() && 
                        <div className='wrapper-modal-detail-payment'>
                            <div className='modal-detail-payment'>
                                <h1>Detail Pesanan</h1>
                                <p>Mohon konfirmasi Username anda sudah benar</p>
                                <ul>
                                    <li>ID: <span>{context?.idUser}</span></li>
                                    <li>Zone ID: <span>{context?.zoneID}</span></li>
                                    <li>Harga: <span>Rp. {context.selectedItem.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></li>
                                    <li>Item: <span>{context?.selectedItem.item}</span></li>
                                </ul>
                                <p className='total-pembayaran'>Total Pembayaran :</p>
                                <h1 className='harga'>Rp. {context.selectedItem.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h1>
                                <div>
                                    <button className="btn-login" onClick={() => setShowModal(false)}>Batalkan</button>
                                    <button className="btn-login" onClick={handleCreateTransaction}>Konfirmasi</button>
                                </div>
                            </div>
                        </div>
                        }
                        {showModalPay && checkTimeLine() && 
                        <div className='wrapper-modal-detail-payment'>
                            <div className='modal-detail-payment'>
                            <h1>Baca sebelum melanjutkan</h1>
                                <p>Dengan anda melanjutkan pembayaran dipastikan bahwa:</p>   
                                <ul>
                                    <li className="final-payment">
                                    UID dan Zone anda sudah sesuai 
                                    </li>
                                    <li className="final-payment">
                                    Jumlah barang yang anda pesan sudah sesuai
                                    </li>
                                    <li className="final-payment">
                                    Total yang akan anda bayar sudah sesuai
                                    </li>
                                    <li className="final-payment">
                                    Anda tidak dapat meminta refund setelah barang sudah diterima 
                                    </li>
                                    <li className="final-payment">
                                    Anda bisa mengajukan complaint ketika barang yang diterima tidak sesuai
                                    </li>
                                    <li className="final-payment">
                                    Anda bisa complaint ke CS jika ada kesalahan teknis seperti error atau bug
                                    </li>
                                </ul>
                                <div>
                                    <button className="btn-login" onClick={() => setShowModal(false)}>Batalkan</button>
                                    <button className="btn-login"  id="pay-button">Setuju</button>
                                </div>
                            </div>
                        </div>
                        }
                        {!loading && <Loading/>}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default DetailGame