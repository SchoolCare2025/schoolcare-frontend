import YoungLady from '../assets/images/youngLady.jpg';

const AboutUs = () => {
    return ( 
        <div className="w-full my-36 px-12 overflow-hidden md:px-3">
            <h2 className='text-center text-4xl font-bold my-16'>About Us</h2>

            <div className="flex mx-4 sm:flex-col-reverse justify-between items-center gap-24 md:flex-row md:gap-4 md:justify-center md:items-center lg:justify-center sxl:px-9">
                <div className="sm:w-[100%] md:w-[50%] md:mt-5 sxl:w-[50%]">
                <p className='text-xl md:text-base md:px-2 lg:text-[18px] sxl:pr-24'>
                   Myschool.com allows students from
                   registered schools to check their results
                   online, both termly results, annual results
                   and entrance exam results with ease.
                   Schools with an official website already
                   can contact us to have result system
                  integrated in their website. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid vero, assumenda inventore beatae laudantium ducimus.
                  Consectetur distinctio eligendi provident totam dolorum ea quo adipisci perspiciatis!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, aut.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dolore, 
                  ab, et obcaecati impedit saepe possimus repudiandae, pariatur error eveniet aut dignissimos. 
                  Quo sequi excepturi alias voluptas beatae, enim saepe sunt, deleniti quidem ad quis inventore. Deleniti
                   rerum quis magni sapiente. Eum qui nulla eligendi perspiciatis modi enim molestiae culpa maiores facilis
                    minima iusto magni autem, architecto est earum. Quos adipisci officia quo sapiente doloremque dolor, quod in, nostrum nam, 
                    alias neque commodi. Quia, harum? Laudantium cumque ratione repellat voluptates rerum nam libero quasi. Quam eveniet illo sit 
                    dicta iure in quos officia architecto, aut provident fugiat ad fuga maxime. Nesciunt unde at aliquam. Necessitatibus laborum sunt minus! Cum 
                    consequatur dolores possimus quis quidem ea odio aperiam nihil aliquid accusamus architecto recusandae atque adipisci eos fugit, 
                    reprehenderit maiores est et velit sapiente voluptatibus.
                </p>

                </div>

            <div className='sm:w-[100%] md:w-[50%] rounded-lg relative lg:justify-center lg:items-center sxl:w-[50%]'>
                <div className='bg-cosWhite absolute top-32 right-96 rounded-xl py-4 pl-10 pr-6 text-resultBtn shadow-xl font-semibold sm:left-[-10%] sm:w-44 sm:text-[10px] sm:h-10 sm:px-0 sm:top-10 sm:text-center sm:flex sm:justify-center sm:items-center'>
                    <p>Get access to academic results</p>
                </div>

            <div className=' md:w-[105%] sxl:w-full'>
                <img src= {YoungLady} alt="" className='rounded-2xl sm:h-auto sm:w-full'/>
            </div>

            <div className='bg-cosWhite absolute top-72 right-2 rounded-xl py-4 px-3 text-cosBlue shadow-xl font-semibold sm:right-[-10%] sm:w-36 sm:text-xs sm:h-10 sm:px-1 sm:top-32 sm:text-center sm:flex sm:justify-center sm:items-center md:top-48 sxl:top-80'>
                    <p>Track your performance</p>
            </div>
                 
            </div>

            </div>

        </div>
     );
}
 
export default AboutUs;