
import React from "react";

const RegisterSchool = () => {
    return ( 
        <div className="px-10 md:px-24 lg:px-16 sxl:px-28 xl:px-64">

        <div className="w-[100%]">
           
            <div className="flex justify-between font-semibold md:w-[100%]">
            <h1 className="hover:underline mb-4">Personal Information</h1> 
            <h1>Address</h1>
            </div>
            <h1 className="text-xl font-bold mb-1">Register your school</h1>
            <p className="text-cosInputText">Please fill in the details below</p>

            <div className=" h-32 w-32 bg-cosInputText  rounded-full grid justify-center items-center sm:mt-4">
            <i class="ri-user-fill text-[96px] font-bold text-cosWhite sm:mt-2"></i>
            </div>

            <div className="mt-4">
                <div className="grid gap-4">
                <h1 className="font-bold text-lg">Name of School</h1>
                <input type="text" className="outline-none w-full bg-inputColors py-3 px-2" placeholder="Example@St. Mary’s memorial school" />
                </div>
            </div>

            <div className="mt-4">
                <div className="grid gap-4">
                <h1 className="font-bold text-lg">School Email</h1>
                <input type="text" className="outline-none w-full bg-inputColors py-3 px-2" placeholder="Enter school email" />
                </div>
            </div>

            <div className="mt-4">
                <div className="grid gap-4">
                <h1 className="font-bold text-lg">School Phone Number</h1>
                <input type="text" className="outline-none w-full bg-inputColors py-3 px-2" placeholder="Enter school phone number" />
                </div>
            </div>
            <button className="bg-cosBlue px-4 py-2 rounded-lg text-cosWhite font-bold text-[19px] sm:mt-9 sm:my-5">Next</button>
        </div>
        </div>

     );
}

export default RegisterSchool;