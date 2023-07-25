import React from 'react';

const CustomerReview = () => {
    const customers = [
        {
            id: 1,
            name: "Anik Sarkar",
            img: "https://i.postimg.cc/fTpQqZDw/people1.png",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 1,
            name: "Nikita",
            img: "https://i.postimg.cc/t46QLf4F/people2.png",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 1,
            name: "Alina",
            img: "https://i.postimg.cc/zf1Z5jy6/people3.png",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ];
    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>Customer Review</h1>
            <div className='grid lg:grid-cols-3 gap-4 m-10'>
                {
                    customers.map(customer => <div key={customer.id} className='border h-56 rounded-lg p-5 border-3 border-primary  shadow-lg '>
                       <div className='flex items-center justify-center'>
                          <img className='h-20 border-4 rounded-full border-primary mr-3' src={customer.img} alt="" />
                          <p className='font-semibold text-primary'>{customer.name}</p>
                       </div>
                       <p className='text-center '>{customer.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;