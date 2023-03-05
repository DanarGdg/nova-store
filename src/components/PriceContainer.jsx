import React, { useEffect } from 'react'
import diamond from '../assets/diamond.svg'
import { useApiPrice } from '../context/api/PriceApi'

function PriceContainer() {
    const context = useApiPrice()
    function checkIndex(){
        if (context.value == 0) {
            return null
          }
          else if (context.value >= 0 && context.value <= 20) {
            return 0
          } else if (context.value >= 20 && context.value <= 40) {
            return 1
          } else if (context.value >= 40 && context.value <= 60) {
            return 2
          } else if (context.value >= 60 && context.value <= 80) {
            return 3
          } else if (context.value >= 80 && context.value <= 100) {
            return 4
          } else if (context.value >= 100) {
            return context.step === 20 ? null : 5
          }
    }

    useEffect(() => {
        checkIndex()
    }, [
        context.value, context.listPrice, context.step, context.selectedItem
    ])

    return (
        <>
            {
                checkIndex() === null ? null 
                :<div className='price-container'>
                    <p className='status'>Tersedia</p>
                    {/* <div className="cr cr-top cr-right"><span>Promo</span></div> */}
                    <img src={diamond} alt="" />
                    <p className='amount'>{context.listPrice[checkIndex()]?.item}</p>
                    <p>Rp. {context.listPrice[checkIndex()]?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                </div>
            }
            {/* {context.listPrice.map((data, key) => (
                <div className='price-container' key={key}>
                    <p className='status'>Tersedia</p>
                    <div className="cr cr-top cr-right"><span>Promo</span></div>
                    <img src={diamond} alt="" />
                    <p className='amount'>{data.item}</p>
                    <p>Rp. {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                </div>
            ))} */}
        </>
    )
}

export default PriceContainer