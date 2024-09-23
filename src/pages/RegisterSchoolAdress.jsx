const RegisterSchoolAdress = () => {
    return ( 
        <div className="px-10 md:px-24 lg:px-16 sxl:px-28 xl:px-64">
            <h1 className="font-bold text-[26px]">Tell us more about your school</h1>
            <p className="text-cosInputText">Please fill in the details below</p>

          <div>

            <div className="pb-7">
            <h1 className="font-bold text-[19px] pb-4">School Nationality</h1>
            <select name="" id="" className="formInputs">
                <option value="">Choose School Nationality</option>
                <option value="">JSS1 A</option>
                <option value="">JSS1 B</option>
                <option value="">JSS2 A</option>
                <option value="">SS3 A</option>
            </select>
            </div>

            <div className="pb-7">
            <h1 className="font-bold text-[19px] pb-4">School Adress</h1>
            <input type="text" placeholder="Enter school address" className="formInputs" /> 
            </div>

            <div className="grid grid-cols-2 gap-5">
            <div className="pb-7">
            <h1 className="font-bold text-[19px] pb-4">State</h1>
            <select name="" id="" className="formInputs">
                <option value="">Choose School State</option>
                <option value="">Abia</option>
                <option value="">Adamawa</option>
                <option value="">Akwa Ibom</option>
                <option value="">Anambra</option>
            </select>
            </div>
            <div className="pb-7">
            <h1 className="font-bold text-[19px] pb-4">City</h1>
            <select name="" id="" className="formInputs">
                <option value="">Select School City</option>
                <option value="">ewewgyu</option>
                <option value="">ygeyuweue</option>
                <option value="">jyhddui</option>
                <option value="">t3yyueyuh</option>
            </select>
            </div>

            <div className="pb-7">
            <h1 className="font-bold text-[19px] pb-4">LGA</h1>
            <select name="" id="" className="formInputs">
                <option value="">Choose School LGA</option>
                <option value="">eeyy</option>
                <option value="">ewhwuiwe</option>
                <option value="">gegae</option>
                <option value="">waeae</option>
            </select>
            </div>

            <div className="pb-7">
            <h1 className="font-bold text-[19px] pb-4">Postal Code</h1>
            <input type="text" placeholder="Enter Postal Code" className="formInputs" /> 
            </div>
                  
            </div>
          </div>
          <div className="flex justify-between">
          <button className="bg-inputColors px-4 py-2 rounded-lg font-bold text-[19px] sm:mt-9 sm:my-5">Back</button>
          <button className="bg-cosBlue px-4 py-2 rounded-lg text-cosWhite font-bold text-[19px] sm:mt-9 sm:my-5">Next</button>
            
          </div>
          
        </div>
     );
}
export default RegisterSchoolAdress;