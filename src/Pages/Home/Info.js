import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = ({img, cardTitle, cardDetail}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-2'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" cardDetail="This is the first card" img={clock}></InfoCard>
            <InfoCard cardTitle="Our locations" bgClass="bg-accent" cardDetail="This is the second card" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact US" bgClass="bg-gradient-to-r from-secondary to-primary" cardDetail="This is the third card" img={phone}></InfoCard>
        </div>
    );
};

export default Info;