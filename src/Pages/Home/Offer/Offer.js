import React from 'react';
import offer from '../../../assest/customer/special-offer-sale-discount-banner_180786-46.avif'

const Offer = () => {
    return (
        <div className="hero lg:min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={offer} alt='offer' className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="sm:text-2xl lg:text-5xl text-sky-400 font-bold">Offer Offer Sell Offer!</h1>
                    <p className="py-6">Buy & sell 4 fan, you get 20% your sell or buy price</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;