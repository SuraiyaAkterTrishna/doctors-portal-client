import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1, 
            name: 'Fluoride Treatment',
            description: 'You can treat your teeth to improve your teeth health and get ride of fluoride by this treatment.',
            img: fluoride
        },
        {
            _id: 2, 
            name: 'Cavity Filling',
            description: 'This will protect your teeth to fight against cavity and it will help your teeth to improve condition.',
            img: cavity
        },
        {
            _id: 3, 
            name: 'Teeth Whitening',
            description: 'By this treatment, your teeth will be much whitening as you wish as your dream teeth that look perfect for you.',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key = {service._id}
                        service = {service}
                    ></Service> )
                }
            </div>
        </div>
    );
};

export default Services;