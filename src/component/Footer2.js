import React from 'react'
import img1 from "../image/footer photo.png"
import img2 from "../image/facebook.svg"
import img3 from "../image/insta.svg"
import img4 from "../image/twi.svg"
import './Footer2.css'

export const Footer2 = () => {
  return (
    <div>
        <div className="footer2">
             <div className="footer-img">
                <img src={img1}/>
             </div>
             <div className="footer3">
                <div>
                    <h3>Get in touch with us</h3>
                 </div>
                 <div>
                    <p>PHONE</p>
                    <p>(123) 456-7890</p>
                 </div>
                 <div>
                    <p>EMAIL</p>
                    <p>hello@reallygreatsite.com</p>
                 </div>
                 <div>
                   <p>SOCIAL</p>
                 </div>
                 <div className="footer4">
                 <div className="footer4-icon">
                 <i className="fa fa-facebook icon4 " ></i>
                 </div>
                 <div  className="footer41-icon">
                 <i className="fa fa-instagram icon4" aria-hidden="true"></i>
                 </div>
                <div  className="footer42-icon">
                <i className="fa fa-twitter icon4" aria-hidden="true"></i>
                </div>
                 </div>
             </div>
             
        </div>
    </div>
  )
}
