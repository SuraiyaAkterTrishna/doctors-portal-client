import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center'>
            <div className='p-16'>
                <div className='text-center py-4'>
                    <h3 className='text-xl text-secondary'>Contact Us</h3>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                </div>
                <div>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs my-2" /> <br />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs my-2" /> <br />
                <textarea className="textarea textarea-bordered my-2 w-80" placeholder="Your Message"></textarea>
                </div>
                <div className='text-center'>
                <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Contact;