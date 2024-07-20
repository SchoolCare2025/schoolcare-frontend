import React from 'react';
import bgImage from '../assets/images/collegeStd.jpg';

const Homepage = () => {

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to right bottom, rgba(2, 141, 219, 0.9), rgba(2, 141, 219, 0.7)), url('${bgImage}')`,
    backgroundSize: "cover",
  
  } 
  return (
<div className='sm:px-2 gap-8 sm:pt-[4rem] sm:pb-[12rem] md:grid md:grid-cols-2 md:gap-5 md:pb-24 lg:px-14 lg:pb-48 xl:pb-52' style={backgroundImageStyle}>

  <div className='md:px-2 lg:mr-10'>

  <div className='sm:mt-0 sm:w-[100%] md:max-w-2xl grid grid-cols-1 md:ml-0 gap-4 text-cosWhite md:mt-8'>
    <h2 className='sm:text-2xl sm:font-bold text-center text-5xl md:text-4xl font-semibold lg:text-left'>School Results and Checker</h2>
<p className='sm:text-base md:text-xl sm:text-center text-2xl my-2 lg:text-left'>Get access to all academic results with ease.
Whether you're eagerly anticipating your final
exam results or need to track your performance
throughout the semester, Myschool offers a user-friendly
interface that puts all your academic  data
at your fingertips.</p>
    </div>

<div className='sm:flex md:flex gap-4 pt-12 justify-center items-center md:justify-start'>
    <button className='sm:hidden md:block bg-cosBlue px-3 py-2 rounded-lg text-textWhite text-xl'>Get Started</button>
    <button className='sm:bg-cosBlue rounded-lg font-semibold px-3 py-2 border-2 border-cosBlue text-textWhite bg-none'>Register School</button>
</div>
</div>

    <form action="" className='sm:mb-72 sm:mx-[10%] sm:max-w-[75%] sm:absolute sm:mt-10 md:block w-full md:max-w-[50%] md:mx-[0] bg-cosWhite p-5 rounded-[12px] shadow-2xl md:absolute md:right-[2%] md:px-8 md:pb-16 md:top-[15%] lg:max-w-[32%] xl:right-[8%]'>
      <p className='mb-4'>Fill up the form below to access result</p>
      <div className='grid grid-cols-2 sm:gap-x-4 md:gap-4'>

      <div className=''>
      <p className='text-md'>School ID*</p>
      <input type="text" placeholder='eg:12567' className='input placeholder: text-sm mb-4' />
      </div>


      <div className=''>
      <p className='text-md'>Result Session*</p>
      <select className='input placeholder: text-sm mb-4' type="text" placeholder='choose session'>
        <option value="">Choose Session</option>
        <option value="">2024/2025</option>
        <option value="">2025/2026</option>
      </select>
      </div>

      <div className=''>
      <p className='text-md'>Class Grade*</p>
      <select className='input placeholder: text-sm mb-4' type="text">
      <option className='options' value="">Choose Class</option>
        <option className='options' value="">Primary One</option>
        <option className='options' value="">Primary Two</option>
        <option className='options' value="">Primary Three</option>
        <option className='options' value="">Primary Four</option>
        <option className='options' value="">Primary Five</option>
        <option className='options' value="">Primary Six</option>
        <option className='options' value="">JSS1</option>
        <option className='options' value="">JSS2</option>
        <option className='options' value="">JSS3</option>
        <option className='options' value="">SS1</option>
        <option className='options' value="">SS2</option>
        <option className='options' value="">SS3</option>
      </select>
      </div>

      <div className=''>
      <p className='text-md'>Card Pin</p>
      <input className='input placeholder: text-sm mb-4' type="text" placeholder='Enter card pin'/>
      </div>

      <div className=''>
      <p className='text-md'>Reg Number</p>
      <input className='input placeholder: text-sm mb-4' type="text" placeholder='eg:20246...'/>
      </div>
      
      <div className=''>
      <p className='text-md'>Result Term</p>
      <select className='input placeholder: text-sm mb-4' type="text" >
      <option value="">Choose Term</option>
      <option value="">First</option>
      <option value="">Second</option>
      </select>
      </div>

      <div className=''>
      <p className='text-md'>Grade Level*</p>
      <input className='input placeholder: text-sm mb-4' type="text" placeholder='eg: JSS1 A' />
      </div>

      <div className=''>
      <p className='text-md'>Card Serial No.</p>
      <input className='input placeholder: text-sm' type="text" placeholder='eg: 12348...'/>
      </div>

      </div>
      <button className='bg-resultBtn px-2 py-2 rounded-lg text-textWhite text-sm mt-4 border-none font-semibold'>Check Result</button>
    </form>
  
  <div>

  </div>
</div>

);
}

export default Homepage;
