
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
            <h1 className='text-4xl lg:m-10 mb-8 text-primary'>All fan</h1>
           <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
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