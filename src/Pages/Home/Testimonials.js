import React from 'react';
import quotes from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id : 1,
            name: 'Winson Herry',
            location: 'califoria',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id : 2,
            name: 'Moriom Rabeya',
            location: 'califoria',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id : 3,
            name: 'Asia Fatema',
            location: 'califoria',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        },
    ]
    return (
        <section className='my-20 px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-secondary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quotes} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review 
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;