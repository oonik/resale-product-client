import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FanCategory = () => {
    const [fanCategories, setFanCategories] = useState([]);

    useEffect(() => {
        fetch('https://old-fan-sell-server.vercel.app/fancategory')
            .then(res => res.json())
            .then(data => setFanCategories(data))
    }, [])
    return (
        <div className='m-10'>
            <h2 className='text-4xl text-center text-primary font-bold'>Fan categories</h2>
            <div className='grid lg:grid-cols-3 gap-5 justify-center items-center'>
            {
                fanCategories.map(fanCategory => <div key={fanCategory._id}  className="card h-4/5 bg-base-100 shadow-xl border-primary border-2">
                <figure className="px-10 pt-10">
                  <img src={fanCategory.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{fanCategory.name}</h2>
                  <p>If you want to buy {fanCategory.name} ?</p>
                  <div className="card-actions">
                    <Link to={`/ceiling/${fanCategory.category_id}`}><button className="btn btn-primary text-white">Go to {fanCategory.name}</button></Link>
                  </div>
                </div>
              </div>)
            }
            </div>
        </div>
    );
};

export default FanCategory;