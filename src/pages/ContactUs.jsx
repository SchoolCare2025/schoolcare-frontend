
import AiImage from '../assets/images/AiImage.png';

const ContactUs = () => {
    return ( 
        <div>
            <div className='px-8 py-12'>
                <img src= {AiImage} alt="" />
                <p className='font-semibold'>Fill out the form below, one of our team members will get back
                   to you shortly
                </p>

                <div className='mt-4 border-2 rounded-lg py-7 px-4'>
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
                    <button className='p-2 bg-cosBlue my-3 rounded-lg text-cosWhite'>Send Message</button>
                </div>

                <div className='flex rounded-lg border-2 justify-between items-center my-12 p-3 '>
                    <div>
                    <p>You can email us here</p>
                    <p className='font-semibold'>schoolregister@gmail.com</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                    
                </div>

                <div className='flex rounded-lg border-2 justify-between items-center my-12 p-3 '>
                    <div>
                    <p>You can email us here</p>
                    <p className='font-semibold'>schoolregister@gmail.com</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                    
                </div>

                <div className='flex rounded-lg border-2 justify-between items-center my-12 p-3 '>
                    <div>
                    <p>You can email us here</p>
                    <p className='font-semibold'>schoolregister@gmail.com</p>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                    
                </div>

            </div>

            
        </div>
     );
}
 
export default ContactUs;