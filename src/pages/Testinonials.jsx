import Schul2 from '../assets/images/School2.png';
import Schul1 from '../assets/images/School1.png';
const Testimonials = () => {
    return ( 
        <div className= "text-center">
            <h1 className="text-black font-bold text-4xl">Testimonials</h1>
            <p className="text-testiFont mb-8 mt-2">What Our Users Say About Us</p>


            <div className="bg-bgTestimonials-65 flex justify-center items-center gap-7 py-16 pb-48 sm:px-4 md:px-12">

            <div className="grid w-full items-center justify-center">
            <div className="rounded-full bg-cosWhite w-16 h-16 mx-auto">
                <img src= {Schul1} alt="" className="w-full h-full object-cover" />

            </div>
            <p className="text-center mt-4 text-cosWhite lg:text-[20px]">I was pleasantly surprised by how easy it is to navigate
               this platform. The user interface is intuitive, making  it simple for students
               to access their
               results  hassle-free.
            </p> 
            <div className='flex gap-1 justify-center items-center mt-2'>
            <i class="ri-star-fill text-starColor text-xl"></i>
            <i class="ri-star-fill text-starColor text-xl"></i>
            <i class="ri-star-fill text-starColor text-xl"></i>
            <i class="ri-star-fill text-starColor text-xl"></i>
            <i class="ri-star-fill text-starColor text-xl"></i>
            </div>  
            </div>


            <div className="w-full items-center justify-center">
            <div className="rounded-full bg-cosWhite w-16 h-16 grid-cols-1 mx-auto">
            <img src= {Schul2} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-center mt-4 text-cosWhite lg:text-[20px]">This platform has simplified the process of accessing
              students results online. No more waiting in long lines
              or dealing with paperwork. Lorem ipsum dolor sit amet.
            </p> 
            <div className='flex gap-1 justify-center items-center mt-2'>
            <i class="ri-star-fill text-starColor text-xl"></i>
            <i class="ri-star-fill text-starColor text-xl"></i>
            <i class="ri-star-fill text-starColor text-xl"></i>
            <i class="ri-star-fill text-starColor text-xl"></i>
            <i class="ri-star-fill text-starColor text-xl"></i>

            </div>    
            </div>
                  
            </div>
        </div>
     );
}
 
export default Testimonials;