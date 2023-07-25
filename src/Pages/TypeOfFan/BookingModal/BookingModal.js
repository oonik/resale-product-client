import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const BookingModal = ({ fan, setFan }) => {
    const { picture, name, resale_price, original_price, address, posted_time, years_of_use, saler_name, _id } = fan;
    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;

        const booking = {
            fanName: fan.name,
             name,
             email,
             price,
             number,
             location
        };
        // console.log(booking);

       fetch('https://old-fan-sell-server.vercel.app/booking', {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(booking)
       })
       .then(res => res.json())
       .then(data => {
         if(data.acknowledged === true){
            toast.success('booking successfully')
            setFan(null)
         }
       })

    };

    
     
    
    return (
        <dialog id="booking_modal" className="modal">

            <div method="dialog" className="modal-box bg-slate-700">
                
                <form onSubmit={handleBooking}>
                    <h3 className="font-bold text-lg mb-4">{name}</h3>
                    <input name='name' type="text"  placeholder="Your name" className="input text-white input-bordered w-full mb-4" />
                    <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Email address" className="input text-white input-bordered w-full mb-4" />
                    <input name='price' type="email" defaultValue={resale_price} readOnly placeholder="Email address" className="input text-white input-bordered w-full mb-4" />
                    <input name='number' type="number" placeholder="Number" className="input text-white input-bordered w-full mb-4" />
                    <input name='location' type="text" placeholder="Meeting Location" className="input text-white input-bordered w-full mb-4" />
                    <input type="submit" value="submit" className='btn btn-primary w-full'/>
                </form>
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>

        </dialog>
    );
};

export default BookingModal;