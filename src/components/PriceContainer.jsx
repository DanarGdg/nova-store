import React from 'react'
import diamond from '../assets/diamond.svg'
import { useApiPrice } from '../context/api/PriceApi'

function PriceContainer() {
    const context = useApiPrice()
    return (
        <>
            {context.listPrice.map((data, key) => (
                <div className='price-container' key={key}>
                    <p className='status'>Tersedia</p>
                    <div className="cr cr-top cr-right"><span>Promo</span></div>
                    <img src={diamond} alt="" />
                    <p className='amount'>{data.item}</p>
                    <p>Rp. {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                </div>
            ))}
        </>
    )
}

export default PriceContainer