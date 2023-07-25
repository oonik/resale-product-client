import React from 'react';
import Banner from '../Banner/Banner';
import FanCategory from '../FanCategory/FanCategory';
import CustomerReview from '../CustomerReview/CustomerReview';
import ContactUs from '../ContactUs/ContactUs';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <FanCategory></FanCategory>
            <CustomerReview></CustomerReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;