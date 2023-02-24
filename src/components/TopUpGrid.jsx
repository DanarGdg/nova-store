import React from 'react'
import { useContextDetailGame } from '../context/app/ContextDetailGame'

function TopUpGrid({items, loading, setSelectedItem, selectedItem}) {
    const context = useContextDetailGame()
    function handleSelect(item){
        setSelectedItem(item)
        context.setActive2(true)
    }
  return (
    <>
        {loading ?
            items.map((item, i) => (
                <div key={i} className={`item ${item.id === selectedItem.id ? 'selected' : ''}`} onClick={() => handleSelect(item)}>
                    <svg width="40" height="43" viewBox="0 0 40 43" fill="#7C7FFF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7119 0.0730832C19.6169 0.106712 19.4664 0.249637 19.3714 0.375746C19.213 0.594337 19.2051 0.67841 19.2051 2.94838C19.2051 5.43695 19.2368 5.66395 19.5931 5.87413C19.8148 6.00024 20.2504 5.97502 20.4404 5.83209C20.773 5.58828 20.7968 5.35288 20.773 2.8559L20.7493 0.476634L20.488 0.232822C20.2266 -0.0109899 20.0128 -0.0614338 19.7119 0.0730832Z" fill="#7C7FFF"/>
                        <path d="M12.6877 3.30146C12.4264 3.55368 12.3472 3.87316 12.466 4.18423C12.6085 4.52893 15.6336 7.69849 15.9028 7.76574C16.1642 7.84141 16.5522 7.68167 16.7106 7.43786C16.7739 7.34538 16.8294 7.11838 16.8294 6.93342C16.8294 6.60554 16.7739 6.53828 15.1822 4.84841C13.5826 3.14172 13.5271 3.09969 13.2183 3.09969C12.9807 3.09969 12.8382 3.15854 12.6877 3.30146Z" fill="#7C7FFF"/>
                        <path d="M24.654 4.8483C23.0227 6.5718 23.0068 6.59702 23.0068 6.95013C23.0068 7.54705 23.5295 7.94219 24.0284 7.73201C24.3531 7.58068 27.3385 4.36908 27.4019 4.08323C27.4732 3.80579 27.3227 3.39383 27.093 3.22569C27.0059 3.15843 26.7921 3.09958 26.6179 3.09958C26.3091 3.09958 26.2457 3.15843 24.654 4.8483Z" fill="#7C7FFF"/>
                        <path d="M7.35835 10.1617C7.16037 10.2458 0.294602 18.4682 0.0966271 18.8633C-0.0855099 19.2248 -0.0221579 19.477 0.38963 19.9731C1.87048 21.7891 19.419 42.7653 19.514 42.841C19.7437 43.0259 20.0604 43.0512 20.3297 42.9082C20.496 42.8242 23.8378 38.8895 29.5395 32.0544C40.5073 18.9138 39.9213 19.62 39.9846 19.3593C40.0242 19.2164 39.9846 19.0399 39.8975 18.8633C39.6758 18.4345 32.8258 10.2374 32.6041 10.1533C32.3665 10.0609 7.588 10.0609 7.35835 10.1617ZM16.291 13.8357C13.4401 16.9464 12.6403 17.7788 12.569 17.6863C12.4661 17.5686 9.14804 11.86 9.14804 11.8012C9.14804 11.776 11.1832 11.7591 13.6698 11.7591H18.1915L16.291 13.8357ZM30.8461 11.8012C30.8461 11.86 27.528 17.5686 27.4251 17.6863C27.3538 17.7788 26.554 16.9464 23.7032 13.8357L21.8026 11.7591H26.3243C28.8109 11.7591 30.8461 11.776 30.8461 11.8012ZM9.34602 15.3743C10.2488 16.9212 11.0011 18.2328 11.0248 18.2916C11.0565 18.3841 10.2567 18.4009 6.81194 18.4009C4.47583 18.4009 2.57527 18.3673 2.59111 18.3337C2.60695 18.3 3.71561 16.938 5.06976 15.3154C6.91488 13.0959 7.5484 12.3897 7.61176 12.4654C7.66719 12.5158 8.44325 13.8273 9.34602 15.3743ZM22.8242 15.307C24.3604 16.938 25.6196 18.3 25.6196 18.3337C25.6196 18.3757 23.0934 18.4009 19.9971 18.4009C16.9087 18.4009 14.3746 18.3757 14.3746 18.3421C14.3746 18.2664 19.9337 12.3476 19.9971 12.3476C20.0208 12.3476 21.2958 13.6844 22.8242 15.307ZM34.9561 15.3575C36.3102 16.9801 37.4189 18.3337 37.4189 18.3589C37.4189 18.3841 35.5104 18.4009 33.1743 18.4009C29.7374 18.4009 28.9376 18.3841 28.9693 18.2916C29.0168 18.1655 32.2478 12.6083 32.3745 12.4485C32.4141 12.3897 32.4616 12.3561 32.4695 12.3645C32.4774 12.3813 33.594 13.7264 34.9561 15.3575ZM15.1348 29.4902C16.8928 34.6438 18.3262 38.8643 18.3103 38.8727C18.2866 38.8979 2.70198 20.2505 2.6703 20.1496C2.65446 20.116 4.72924 20.0908 7.28708 20.0992L11.9355 20.1244L15.1348 29.4902ZM37.3238 20.1496C37.2763 20.2926 21.7788 38.7971 21.7551 38.7466C21.7472 38.7214 22.737 35.8293 23.9566 32.3234C25.4057 28.145 26.1739 25.833 26.1739 25.6228C26.1739 24.9754 25.3266 24.6139 24.9068 25.0847C24.7089 25.3033 24.4713 25.9759 21.7392 33.8536C20.6623 36.9559 20.0129 38.713 19.9733 38.6457C19.9337 38.5869 18.4845 34.3832 16.7582 29.3052L13.6064 20.0824H25.477C32.0102 20.0824 37.3397 20.116 37.3238 20.1496Z" fill="#7C7FFF"/>
                        <path d="M26.2771 21.7471C26.0474 21.7808 25.699 22.1591 25.6911 22.3861C25.6673 22.7728 25.7148 22.9073 25.9445 23.1259C26.2691 23.4538 26.6572 23.4454 26.9739 23.1175C27.5203 22.529 27.061 21.621 26.2771 21.7471Z" fill="#7C7FFF"/>
                    </svg>
                    <p>{item?.item}</p>
                </div>
            ))
        : 'loading'
        }
    </>
  )
}

export default TopUpGrid