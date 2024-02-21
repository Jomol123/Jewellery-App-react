import React from 'react'
import './Main.css'
import img1 from '../image/chain.png'

export const Main = () => {
    return (
        <div className='main'>
        <div className='main1' >
            <h2 className='mainhead1'>Bringing your vision to life</h2>
            <p className='mainhead2'>What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader's attention.</p>
        </div>
           
           <img src={img1}/>
                 
        </div>
        
    )
}
