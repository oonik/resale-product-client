
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FanCard from '../../../Shared/FanCard/FanCard';
import Banner from '../../Home/Banner/Banner';
import BookingModal from '../BookingModal/BookingModal';

const CeilingFan = () => {
    const ceilingFans = useLoaderData();
    const [fan, setFan] = useState(null);
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-3xl font-bold lg:m-10 mb-8 text-primary text-center'>All fan</h1>
           <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 lg:ml-3 justify-center items-center'>
              {
                ceilingFans.map(fan =>  <FanCard
                key={fan._id}
                fan={fan}
                setFan={setFan}
                ></FanCard>)
              }
           </div>
           {
            fan && <BookingModal
            fan={fan}
            setFan={setFan}
            >
            </BookingModal>
           }
        </div>
    );
};

export default CeilingFan;