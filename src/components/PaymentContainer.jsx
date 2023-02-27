import dayjs from 'dayjs';
import React from 'react'
import pendingPaymentBorder from '../assets/pending-payment-border.png';
import successPaymentBorder from '../assets/success-payment-border.png';
import { useProfileApi } from '../context/api/ProfileApi';

function PaymentContainer() {
    const context = useProfileApi()
    return (
        <>
            {context.profileData['history-payment']?.map((data, index) => (
                <div className='payment' key={index}>
                    <div className="payment-container">
                        <img src={
                            data.status === 'Pending' ? pendingPaymentBorder 
                            : data.status === 'Success' ? successPaymentBorder 
                            : 'invalid'} 
                        alt="" />
                        <ul className="column-box">
                            <li>
                                <div className="header-title">
                                    [GAME: <h1>&nbsp; {data.game.nama}</h1>]
                                </div>
                            </li>
                            <li>
                                <div className="data">
                                    <div>
                                        <ul className="list-data">
                                            <li>
                                                User id: {data?.user_id}
                                            </li>
                                            <li>
                                                Id payment: {data?.id}
                                            </li>
                                            <li>
                                                Nominal top-up: {data?.item.item}
                                            </li>
                                            <li>
                                                Harga: Rp. {data?.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul className="list-divider">
                                            <li>
                                                <p>&gt;&gt;&gt;</p>
                                            </li>
                                            <li>
                                                <p>&gt;&gt;&gt;</p>
                                            </li>
                                            <li>
                                                <p>&gt;&gt;&gt;</p>
                                            </li>
                                            <li>
                                                <p>&gt;&gt;&gt;</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-data">
                                            <li>
                                                Date order: {dayjs(data?.created_at).format('DD-MM-YYYY')}
                                            </li>
                                            <li>
                                                Date payment: {dayjs(data?.updated_at).format('DD-MM-YYYY')}
                                            </li>
                                            <li>
                                                Status: {data?.status}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PaymentContainer