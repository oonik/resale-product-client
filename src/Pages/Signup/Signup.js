import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUserWithEmail } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    
    const navigate = useNavigate();
    
    

    const handleSingUp = data => {
        setSignupError('');
        createUserWithEmail(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)

                saveUser(data.firstName, data.role, data.email)
            })
            .catch(err => {
                console.log(err.message)
                setSignupError(err.message)
                
            });

        const saveUser = (name, role, email) => {
            const user = { name, role, email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('save user', data)
                    navigate('/')
                })
        }
    }
    return (
        <div className="hero py-10">
            <div className="hero-content">
                <div className="w-96 p-7 shadow-xl">
                    <h1 className='text-3xl text-primary text-center font-bold'>Signup</h1>
                    <form onSubmit={handleSubmit(handleSingUp)} className="card-body">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("firstName", { required: "Name is required" })} placeholder="name" className="input input-bordered" />
                            {errors.firstName && <p className='text-red-500'>{errors.firstName?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <input type="text" {...register("role", { required: "role is required" })} placeholder="seller/buyer" className="input input-bordered" />
                            {errors.role && <p className='text-red-500'>{errors.role?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: 'password is required', minLength: { value: 8, message: "password must 8 characters or longer" } })} placeholder="password" className="input input-bordered" />
                            {errors?.password && <p role="alert" className='text-red-500'>{errors?.password.message}</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="singup" className="btn btn-primary w-full" />
                        </div>
                        <div>
                            {signupError && <p className='text-red-600'>{signupError}</p>}
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/login'><small className='text-secondary'>Login</small></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;