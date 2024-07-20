
import React from 'react';
import RegisteredIcon from '../assets/images/registeredIcon.svg';

const  Registered = () => {
    return ( 
        <div className="sm:mt-[94%] w-full h-32 bg-cosBlue my-40 flex justify-center items-center gap-x-24 sm:gap-x-28 md:gap-40 md:mt-[20%] lg:gap-48 lg:my-40">
            <div className='flex sm:flex-col sm:items-center lg:flex-row lg:gap-3'>
                <div className='md:w-16 md:h-16 bg-cosWhite rounded-full sm:w-12 sm:h-12 text-center'>
                <i class="ri-graduation-cap-line sm:text-[35px] md:text-[44px]"></i>
                </div>
                <div className='text-cosWhite sm:text-center lg:text-start'> 
                <p>582</p>
                <p>Registered School</p>
                </div>
                
            </div>

            <div className='flex sm:flex-col sm:items-center lg:flex-row lg:gap-3'>
                <div className='grid md:w-16 md:h-16 bg-cosWhite rounded-full sm:w-12 sm:h-12 text-center'>
                <i className="ri-user-line sm:text-[36px] md:text-[44px]"></i>
                </div>
                <div className='text-cosWhite sm:text-center lg:text-start'>
                <p>98,679</p>
                <p>Registered Candidates</p>
                </div>
                
            </div>

        </div>
     );
}
 
export default Registered;