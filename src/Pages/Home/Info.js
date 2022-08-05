import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = ({img, cardTitle, cardDetail}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" cardDetail="9:00 AM - 5:00 PM" img={clock}></InfoCard>
            <InfoCard cardTitle="Our locations" bgClass="bg-gradient-to-r from-accent to-neutral" cardDetail="Kalapara, Patuakhali" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact US" bgClass="bg-gradient-to-r from-secondary to-primary" cardDetail="+01580866993" img={phone}></InfoCard>
        </div>
    );
};

export default Info;