import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '../../Pages/Home/Banner.css';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div class="hero min-h-screen chair-bg ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl mx-4" alt='Dentist Chair' />
                
                <div>
                    <DayPicker 
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;