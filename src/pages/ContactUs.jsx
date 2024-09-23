
import AiImage from '../assets/images/AiImage.png';

const ContactUs = () => {
    return ( 

        <div className='bg-cosWhite px-8 py-12 md:flex md:gap-7 md:w-[48% lg:gap-36'>

            <div className='md:w-[45%]'>
             <img src= {AiImage} alt=""/>

             <div className='sm:hidden md:block'>
                <div className='bg-white flex rounded-lg border-2 justify-between items-center my-8 p-3 '>
                    <div>
                    <p>You can email us here</p>
                    <p className='font-semibold'>schoolregister@gmail.com</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                     
                </div>

                <div className='bg-white flex rounded-lg border-2 justify-between items-center p-3 md:w-[100%]'>
                    <div>
                    <p>Give us a call on</p>
                    
                    <p className='font-semibold'> +234 9038 7468 94  +234 7025 097 100</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                    
                </div>

                <div className='bg-white flex rounded-lg border-2 justify-between items-center my-8 p-3 '>
                    <div>
                    <p>You can send us a direct whatsapp message</p>
                    <p className='font-semibold'> +234 9038 7468 94</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                </div>

                <p className='sm:hidden md:block'>Follow Us on Social Media</p>
                <div className='flex mt-2 sm:hidden md:block'>
                <i class="ri-facebook-circle-fill text-[24px]"></i>
                <i class="ri-twitter-x-fill text-[24px] mx-4"></i>
                <i class="ri-linkedin-box-fill text-[24px]"></i>
                <i class="ri-instagram-fill text-[24px] ml-4"></i>
                </div>

                </div>

                </div>

               <div className='md:w[52%]'>
                <p className='font-semibold sm:my-6'>Fill out the form below, one of our team members will get back
                to you shortly
                </p>
               <div className='bg-white mt-4 border-2 rounded-lg py-7 px-4 md:order-2 md:pb-16 lg:w-[100%] lg:h-[80vh] lg:px-8 lg:py-8'>
                    
                  <h1 className='font-semibold'>Name*</h1>
                  <input type="text" placeholder='Enter your name' className='w-[100%] border-2 rounded-lg p-3 outline-none'/>
                  <div className='sm:flex gap-4 my-3'>
                    <div>
                    <h1 className='font-semibold'>Email*</h1>
                    <input type="text" placeholder='Enter your Email' className='border-2 sm:w-[100%] rounded-lg p-2 outline-none'/>
                    </div>

                        <div>
                        <h1 className='font-semibold'>Phone*</h1>
                        <input type="text" placeholder='Enter your Phone' className='border-2 sm:w-[100%] rounded-lg p-2 outline-none'/>
                        </div>
                        
                    </div>
                    <h1 className='font-semibold'>Subject*</h1>
                    <input type="text" placeholder='Enter your subject' className='w-[100%] border-2 rounded-lg p-3 outline-none'/>

                    <h1 className='font-semibold mt-4'>Message*</h1>
                    <input type="text" placeholder='Enter your message' className='w-[100%] border-2 rounded-lg pb-20 pl-3 outline-none'/>
                    <button className='p-2 bg-cosBlue my-3 mt-10 rounded-lg text-cosWhite'>Send Message</button>
                </div>
                </div>



                <div className='md:hidden'>
                <div className='flex rounded-lg border-2 justify-between items-center my-8 p-3 px-4'>
                    <div>
                    <p>You can email us here</p>
                    <p className='font-semibold'>schoolregister@gmail.com</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                    
                </div>

                <div className='flex rounded-lg border-2 justify-between items-center p-3 md:w-[100%] px-4'>
                    <div>
                    <p>Give us a call on</p>
                    
                    <p className='font-semibold'> +234 9038 7468 94  +234 7025 097 100</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                    
                </div>

                <div className='flex rounded-lg border-2 justify-between items-center my-8 p-3 px-4'>
                    <div>
                    <p>You can send us a direct whatsapp message</p>
                    <p className='font-semibold'> +234 9038 7468 94</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                </div>

                <p className=''>Follow Us on Social Media</p>
                <div className='flex gap-3 mt-2'>
                <i class="ri-facebook-circle-fill text-[24px]"></i>
                <i class="ri-twitter-x-fill text-[24px]"></i>
                <i class="ri-linkedin-box-fill text-[24px]"></i>
                <i class="ri-instagram-fill text-[24px]"></i>
                </div>

                </div>

            </div>

     );
}
 
export default ContactUs;