import React, {useState} from 'react';
import myskulLogo from '../assets/images/myskulLogo.jpg';

const Navbar = () =>{
      const [nav, SetNav] = useState(false)
      
      const handleNav = () => {
         SetNav(!nav)
      }

    return (

        <nav className= 'sm:bg-cosWhite py-4 px-12 flex items-center justify-between'>
            <div className=''>
                <img src="" alt="Logo" />
            </div>
        <ul className='sm:hidden md:flex md:gap-4 md:text-base md:font-semibold lg:gap-12 lg:font-normal lg:text-lg xl:text-xl xl:gap-14'>
            <li className=' hover:text-cosBlue'><a href="#">Home</a></li>
            <li className=' hover:text-cosBlue'><a href="#">About Us</a></li>
            <li className=' hover:text-cosBlue'><a href="/HowItWorks">How it Works</a></li>
            <li className=' hover:text-cosBlue'><a href="#">FAQs</a></li>
            <li className=' hover:text-cosBlue'><a href="#">Contact Us</a></li>
        </ul>
        <button className='hidden md:block bg-cosBlue px-3 p-2 rounded-lg text-textWhite text-xl'>Register School</button>

        <div onClick={handleNav} className='md:hidden block sm:text-5xl'>
        {nav ? <i className="ri-close-line sm:text-4xl"></i> : <i className="ri-menu-fill sm:text-4xl"></i>}
        </div>

        <div className={nav ? 'sm:bg-cosWhite grid justify-center items-center md:hidden fixed top-[13%] z-10 w-[100%] h-[90%] text-black ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500'}>
            <ul className='sm:pt-24 text-center text-2xl'>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="#">Home</a></li>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="#">About Us</a></li>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="#">How it Works</a></li>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="#">FAQs</a></li>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="#">Contact Us</a></li>
            </ul>
            <button className='sm:bg-cosBlue py-2 rounded-lg text-textWhite text-xl'>Get Started</button>
        </div>

        </nav>

    )

    
}



export default Navbar