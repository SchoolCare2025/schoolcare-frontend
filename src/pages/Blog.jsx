import SchoolChild1 from '../assets/images/skulChild1 1.png';
import SchoolChild2 from '../assets/images/skulChild3 1.png';
import SchoolTenisGirl from '../assets/images/skulTenisGirl 1.png';
import SchoolFootballPitch from '../assets/images/skulFootball 1.png';


const Blogs = () => {
    return ( 
        <div className='mb-52'>
            <h1 className='text-center font-bold text-4xl'>Latest From Our Blog</h1>


            <div className="flex justify-center items-center sm:gap-12 mt-12 sm:grid sm:px-12 md:grid md:grid-cols-2 lg:grid-cols-3 sxl:grid-cols-4">
                <div className="sm:w-full sm:h-full">
                    <div>
                        <img className='sm:w-full sm:h-full' src= {SchoolChild1} alt="" />
                    </div>
                    <h1 className='sm:font-bold my-1 sm:text-[23px]'>St. Charles begins 2023/24...</h1>
                    <p className='sm:text-[20px] sm:py-4'>St Charles resumes
                        academic session after
                        the 3 months holidays
                    </p>
                    <a className='text-blue-500 hover:text-blue-800 sm:text-[20px]' href="#">Read more...</a>
                </div>

                <div className="sm:w-full sm:h-full">
                    <div>
                        <img className='sm:w-full sm:h-full' src= {SchoolChild2} alt="" />
                    </div>
                    <h1 className='sm:font-bold my-1 sm:text-[23px]'>GTC, Agba resumes 2023/2024...</h1>
                    <p className='sm:text-[20px] sm:py-4'>GTC, Agba resumes
                        academic session after
                        the 3 months holidays
                    </p>
                    <a className='text-blue-500 hover:text-blue-800 sm:text-[20px]' href="#">Read more...</a>

                </div>

                <div className="sm:w-full sm:h-full">
                    <div>
                        <img className='sm:w-full sm:h-full' src= {SchoolTenisGirl} alt="" />
                    </div>
                    <h1 className='sm:font-bold my-1 sm:text-[23px]'>FGGC College Sports Festival...</h1>
                    <p className='sm:text-[20px] sm:py-4'>FGGC College Sports Festival has Lorem 
                        ipsum dolor sit amet.
                    </p>
                    <a className='text-blue-500 hover:text-blue-800 sm:text-[20px]' href="#">Read more...</a>

                </div>

                <div className="sm:w-full sm:h-full">
                    <div className=''>
                        <img className='sm:w-full sm:h-full' src= {SchoolFootballPitch} alt="" />
                    </div>
                    <h1 className='sm:font-bold my-1 sm:text-[23px]'>Royal Comp. College Inter-house Sports...</h1>
                    <p className='sm:text-[20px] sm:py-4'>Royal begins Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    </p>
                    <a className='text-blue-500 hover:text-blue-800 sm:text-[20px]' href="#">Read more...</a>

                </div>


            </div>

        </div>
     );
}
 
export default Blogs;