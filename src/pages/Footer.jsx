const Footer = () => {
    return ( 
        <div className="w-full bg-footerBg flex sm:gap-8 px-12 py-24 justify-between max-w-auto">
            <div className="w-80">
                <h1 className="text-black font-semibold">MY SKUL</h1>

                <div className="my-4">
                <p>Get access to all academic results with ease.
                   Whether you're eagerly anticipating your final
                   exam results or need to track your performance
                   throughout the semester,
                </p>
                </div>
                <p>Phone: 09038746894</p>
                <p>Email:myskul.email@gmail.com</p>
                
            </div>
            
            <div className="w-80">
                <h1 className="text-black font-semibold">Useful links</h1>
                <div>
                   <ul className="grid gap-1.5 my-4 sm:text-[15px]">
                    <a href=""><li>Home</li></a>
                    <a href=""><li>About Us</li></a>
                    <a href=""><li>How it Works</li></a>
                    <a href=""><li>FAQs</li></a>
                    <a href=""><li>Contact Us</li></a>
                   </ul>
                </div>
            </div>

            <div className="w-80 sm:w-[20rem] rounded">
                <span className="text-black font-semibold">Leave Us a Message</span>
                {/* <textarea className="my-3 overflow-auto resize-none focus:outline-none focus:ring-0" name="" id="" cols="" rows="4"></textarea> */}

                <button className="bg-cosBlue px-4 py-0.5 text-cosWhite rounded-md hover:bg-greenColor transition duration-300 ease-in-out transform">Send</button>

            </div>
        </div>
     );
}
 
export default Footer;