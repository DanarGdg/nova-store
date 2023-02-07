import React from 'react'
import diamond from '../assets/diamond.svg'

function PriceContainer() {
    return (
        <div className='price-container'>
            <p className='status'>Tersedia</p>
            <div class="cr cr-top cr-right"><span>Promo</span></div>
            <img src={diamond} alt="" />
            <p className='amount'>706 (625+81) <br /> Diamonds</p>
            <p>Rp. 150.000</p>
        </div>
    )
}

export default PriceContainer