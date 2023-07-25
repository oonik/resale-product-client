import React from 'react';
import { Link } from 'react-router-dom';

const FanCard = ({ fan, setFan }) => {
    const { picture, name, resale_price, original_price, address, posted_time, years_of_use, saler_name, _id } = fan;
   
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={picture} className='h-44 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p className='text-red-400 font-bold'>Original price: {original_price}</p>
                <p className='text-red-400 font-bold'>Resale price: {resale_price}</p>
                <p>Years of use: {years_of_use}</p>
                <p>Saler name: {saler_name}</p>
                <p>Location: {address}</p>
                <p>Post time: {posted_time}</p>
                <p className='text-red-500'>Please before <Link to='/login' className='text-primary'>Login</Link> then oder</p>
                <div className="card-actions justify-end">
                    <button class="btn btn-primary w-full" onClick={() => {
                        window.booking_modal?.showModal()
                        setFan(fan)
                    }}>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default FanCard;