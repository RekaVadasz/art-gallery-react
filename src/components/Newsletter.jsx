import React from 'react';
import './Newsletter.css';

function Newsletter() {
    return (
        <div className="newsletter-container">
            <h3 className='sub-title'>Newsletter</h3>
            <p>Subscribe to our newsletter and be the first to receive news on the latest events.</p>
            <div className="form-control">
                <input type="text" placeholder='EMAIL' />
                <button type='submit' className="btn-black">Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;