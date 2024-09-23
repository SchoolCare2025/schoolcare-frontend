import React, {useState} from 'react';
import Logo from '../assets/images/myskulLogo.png';
import { useEffect } from 'react';

const Navbar = () =>{
      const [nav, SetNav] = useState(false)
      
      const handleNav = () => {
         SetNav(!nav)
      };

      useEffect( () => {
        if(nav){
          document.body.style.overflow = "hidden";
        }else
        {
          document.body.style.overflow = "auto";
        }
      }, [nav]);

    return (

        <nav className= 'sm:bg-cosWhite py-4 px-12 flex items-center justify-between'>
            <div className='w-[6%]  sxl:w-[5%]'>
                <img src= {Logo} alt="Logo" />
            </div>
        <ul className='sm:hidden md:flex md:gap-4 md:text-base md:font-semibold lg:gap-12 lg:font-normal lg:text-lg xl:text-xl xl:gap-14'>
            <li className=' hover:text-cosBlue'><a href="/Homepage">Home</a></li>
            <li className=' hover:text-cosBlue'><a href="/AboutUs">About Us</a></li>
            <li className=' hover:text-cosBlue'><a href="/HowItWorks">How it Works</a></li>
            <li className=' hover:text-cosBlue'><a href="/FaQ">FAQs</a></li>
            <li className=' hover:text-cosBlue'><a href="ContactUs">Contact Us</a></li>
        </ul>
        <button className='hidden md:block bg-cosBlue px-3 p-2 rounded-lg text-textWhite text-xl'>Register School</button>

        <div onClick={handleNav} className='md:hidden block sm:text-5xl'>
        {nav ? <i className="ri-close-line text-4xl font-bold"></i> : <i className="ri-menu-fill text-4xl font-bold"></i>}
        </div>

        <div className={nav ? 
        'sm:bg-cosWhite grid justify-center items-center md:hidden fixed top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[100%] h-[90%] text-black ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500'
        }>
            <ul className='sm:pt-24 text-center text-2xl'>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="/Homepage">Home</a></li>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="/AboutUs">About Us</a></li>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="HowItWorks">How it Works</a></li>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="/FaQ">FAQs</a></li>
            <li className='mx-4 hover:text-cosBlue mb-5'><a href="ContactUs">Contact Us</a></li>
            </ul>
            <button className='sm:bg-cosBlue py-2 rounded-lg text-textWhite text-xl'>Get Started</button>
        </div>
        </nav>

    )

}

export default Navbar