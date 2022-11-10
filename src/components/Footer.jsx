import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div id="footer-container" /* className="footer-container" */>

                <div className='icons'>
                    <i className="footer-socials fa-brands fa-facebook-f"></i>
                    <i className="footer-socials fa-brands fa-instagram"></i>
                    <i className="footer-socials fa-brands fa-twitter"></i>
                </div>

                <div className='contacts'>
                    <h1 className='contacts-h1'>address</h1>
                    <p className='contacts-p'>
                        Prospekt Mira, 111 <br />
                        Moscow, Russia, 129223
                    </p>
                    <h1 className='contacts-h1'>phone</h1>
                    <p className='contacts-p'>+ 12 34 567 890</p>
                </div>

                <div className='rights'>
                    <p className='rights-p'>© all rights reserved</p>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer


/* import ReactDOM from 'react-dom'


const element = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(element, document.body)
 */