import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {loginUser} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');


    const handleLogin = data =>{
        setLoginError('')
        loginUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            // console.log(user)
        })
        .catch(err =>{
            console.error(err);
            setLoginError(err.message);
        })
    }
    return (
        <div className="hero py-10">
            <div className="hero-content">
                <div className="w-96 p-7 shadow-xl">
                    <h1 className='text-3xl text-primary text-center font-bold'>Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
                            <input type="password" {...register("password", { required: 'password is required', minLength: {value:8, message: "password must 8 characters or longer"} })} placeholder="password" className="input input-bordered" />
                            {errors?.password && <p role="alert" className='text-red-500'>{errors?.password.message}</p>}
                            <label className="label">
                                <a href="#"  className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="LOGIN" className="btn btn-primary w-full" />
                        </div>
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
                    <p className='text-center'>New to Doctors Portal? <Link to='/signup'><small className='text-secondary'>Create new account</small></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;