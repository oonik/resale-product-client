import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    
    const navigate = useNavigate();
    
    const time = new Date();

    const handleAddProduct = data => {
        fetch('https://old-fan-sell-server.vercel.app/fan', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Product successfully add')
                navigate('/')
            }
        })
    }
    return (
        <form onSubmit={handleSubmit(handleAddProduct)}>
            
           <div className='hero'>
           <div className='p-10 w-full shadow-xl'>
             <h1 className='text-2xl font-bold text-center mb-6 text-primary'>Add Product</h1>

             <div className='lg:flex mb-4'>
             <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-black">Product name</span>
                </label>
                <select {...register("name")} className='border-2'>
                <option value="Stand Fan">Stand Fan</option>
                <option value="Ceiling Fan">Ceiling Fan</option>
                <option value="Table Fan">Table Fan</option>
            </select>
            </div>
            <div className="form-control w-full max-w-xs lg:ml-10">
                <label className="label">
                    <span className="label-text  text-black">Location</span>
                </label>
                <select {...register("address")}>
                <option value="dhaka">Dhaka</option>
                <option value="sylhet">sylhet</option>
                <option value="chittagong">Chittagong</option>
            </select>
            </div>
            </div>

            <div className='lg:flex mb-4'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text  text-black">Saler name</span>
                </label>
                <input type="text" {...register("saler_name", { required: "Name is required" })} placeholder="name" className="input input-bordered" />
            </div>
           <div className="form-control w-full max-w-xs lg:ml-10">
                <label className="label">
                    <span className="label-text  text-black">Original price</span>
                </label>
                <input type="number" {...register("original_price", { required: "price is required" })} placeholder="price" className="input input-bordered" />
            </div>
            </div>

            <div className='lg:flex mb-4'>
           <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text  text-black">Resale price</span>
                </label>
                <input type="number" {...register("resale_price", { required: "price is required" })} placeholder="price" className="input input-bordered" />
            </div>
            <div className="form-control w-full max-w-xs lg:ml-10">
                <label className="label">
                    <span className="label-text  text-black">Year of purchase</span>
                </label>
                <input type="number" {...register("years_of_use", { required: "Year of purchase is required" })} placeholder="Year of purchase" className="input input-bordered" />
            </div>
            </div>

            <div className='lg:flex'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text  text-black">Category</span>
                </label>
                <select {...register("category_id")}>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
            </select>
            </div>
            <div className="form-control w-full max-w-xs lg:ml-10">
                <label className="label">
                    <span className="label-text  text-black">posted time</span>
                </label>
                <input type="number" {...register("posted_time")} defaultValue={time} placeholder="post time" readOnly className="input input-bordered" />
            </div>
            </div>

            <input type="submit" className='btn btn-primary w-full mt-5' />
           </div>
           </div>
        </form>
    );
};

export default AddProduct;