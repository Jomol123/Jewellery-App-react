import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
   <div className='main-footer'>
     <div className="footer1">
            <h1>The value in what we offer</h1>
            <div className="inner-footer-icon">
                <div className="inner-footer">
                    <div className="footer-icon">
                    <i className="fa fa-truck  icon1" aria-hidden="true"></i>
                    </div>
                    <div className="disc">
                         <p>International tracked shipping</p>
                    </div>
                </div>
                <div className="inner-footer">
                    <div className="footer-icon">
                    <i className="fa fa-money  icon1" aria-hidden="true" ></i>
                    </div>
                    <div className="disc">
                        <p>18K Gold and Recycled Silver</p>
                   </div>
                </div>
               <div className="inner-footer">
                <div className="footer-icon">
                <i className="fa fa-globe  icon1" aria-hidden="true"></i>

                </div>
                <div className="disc">
                    <p>Sustainable and ethically-sourced and produced</p>
               </div>
               </div>
                <div className="inner-footer">
                    <div className="footer-icon">
                    <i className="fa fa-calendar-check-o  icon1" aria-hidden="true"></i>
                    </div>
                    <div className="disc">
                        <p>Handcrafted with
                            2-year warranty</p>
                   </div>
                </div>
                
            </div>
            
          
        </div>
   </div>
  );
};

export default Footer;

