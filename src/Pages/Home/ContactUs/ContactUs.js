import React from 'react';

const ContactUs = () => {
    return (
        <section className='my-24 py-16 bg-sky-300 m-10 text-white rounded-lg'>
            <div className="hero">
                <div className="card flex-shrink-0 w-full max-w-lg">
                    <h4 className='text-center lg:text-2xl font-semibold'>contact us </h4>
                    <h3 className='text-center text-2xl lg:text-3xl mt-2.5'>Stay connected with us</h3>
                    <div className="card-body mt-10">
                        <div className="form-control">
                            <input type="text" placeholder="email" className="input input-bordered border-white border-4" />
                        </div>
                        <div>
                            <textarea placeholder="Your message" className="textarea textarea-bordered  border-white border-4 textarea-lg w-full mt-5" ></textarea>
                        </div>
                        <div className="form-control mt-9 flex items-center">
                            <button className="btn btn-white w-28">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;