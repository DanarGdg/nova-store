import React from 'react'

import PaymentBorder from '../assets/payment-border.png';

function PaymentContainer() {
    return (
        <div class="payment-container">
            <img src={PaymentBorder} alt="" />
            <ul class="column-box">
                <li>
                    <div class="header-title">
                        [GAME: Mobile Legend]
                    </div>
                </li>
                <li>
                    <div class="data">
                        <div>
                            <ul class="list-data">
                                <li>
                                    User id: 12230999823
                                </li>
                                <li>
                                    Id payment: 09823
                                </li>
                                <li>
                                    Nominal top-up: 1024 Diamond
                                </li>
                                <li>
                                    Harga: Rp. 712,000
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="list-divider">
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
                            <ul class="list-data">
                                <li>
                                    Date order: 10-12-2022
                                </li>
                                <li>
                                    Date payment: 10-12-2022
                                </li>
                                <li>
                                    Status: Pendding
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PaymentContainer