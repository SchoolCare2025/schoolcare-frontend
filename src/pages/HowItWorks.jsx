export const HowItWorks = () => {
    return ( 
        <div className="sm:px-14 sm:grid sm:gap-10 sm:mt-12 sm:mb-36 md:grid-cols-2 md:justify-center md:items-center sxl:px-28">

            <div className="sm:px-10 bg-footerBg rounded-lg py-10">
            <div className="rounded-full bg-cosBlue text-white grid justify-center items-center sm:w-8 sm:h-8">1
            </div>

            <div className="justify-center items-center sm:flex sm:gap-3">
            <i class="ri-login-circle-line text-[40px] text-cosBlue"></i>

            <div className="sm:grid sm:gap-2">
                <h1 className="font-semibold text-[21px]">Sign Up</h1>
                <p className="text-[18px]">To begin using our system, please sign up
                    with your school and access the school
                    admin portal.
                </p>
                </div>

            </div>
            </div>

            <div className="sm:px-10 bg-footerBg rounded-lg py-10 md:py-6 sxl:pb-24">
            <div className="rounded-full bg-cosBlue text-white grid justify-center items-center sm:w-8 sm:h-8">2
            </div>

            <div className="justify-center items-center sm:flex sm:gap-3">
            <i class="ri-function-add-line text-[40px] text-cosBlue"></i>
            <div className="sm:grid sm:gap-2">
                <h1 className="font-semibold text-[21px]">Add Admin/Editor(s)</h1>
                <p className="text-[18px]">Log in to your school admin dashboard and add 
                the ICT admin or teacher responsible for 
                managing the school management system's
                admin section
                </p>
                </div>
            </div>
            </div>

            <div className="sm:px-10 bg-footerBg rounded-lg py-10">
            <div className="rounded-full bg-cosBlue text-white grid justify-center items-center sm:w-8 sm:h-8">3
            </div>

            <div className="justify-center items-center sm:flex sm:gap-3">
            <i class="ri-user-add-line text-[35px] text-cosBlue"></i>

            <div className="sm:grid sm:gap-2">
                <h1 className="font-semibold text-[21px]">Register Student(s)</h1>
                <p className="text-[18px]">The school admin should log in to the school
                 admin dashboard to register students. Please
                copy each student's  registration number and
                distribute it to them. Each  registration  number is a unique identifier assigned to a
                student, serving as their  identity.

                </p>
                </div>

            </div>
            </div>

            <div className="sm:px-10 bg-footerBg rounded-lg py-4 md:h-[67%]">
            <div className="rounded-full bg-cosBlue text-white grid justify-center items-center sm:w-8 sm:h-8">4
            </div>

            <div className="justify-center items-center sm:flex sm:gap-3">
            <i class="ri-keyboard-box-line text-[35px] text-cosBlue"></i>

            <div className="sm:grid sm:gap-2">
                <h1 className="font-semibold text-[21px]">Input student CA and Exam scores.</h1>
                <p className="text-[18px]">Select subjects and input the CA and Exam scores of each 
                    of the students for each subjects, class and class grade.

                </p>
                </div>

            </div>
            </div>

            <div className="sm:px-10 bg-footerBg rounded-lg py-10 md:px-5 md:py-5">
            <div className="rounded-full bg-cosBlue text-white grid justify-center items-center sm:w-8 sm:h-8">5
            </div>

            <div className="justify-center items-center sm:flex sm:gap-3">
            <i class="ri-checkbox-circle-line text-[35px] text-cosBlue"></i>

            <div className="sm:grid sm:gap-2">
                <h1 className="font-semibold text-[21px]">Submit Scores</h1>
                <p className="text-[18px]">After inputing the scores of the students for each of the subject, the admin
                can click on submit scores to allow
                 the system to compute the final result of each of the students
                The school admin updates the status to
                'View Result' for student viewing. Note: Only the
                admin can change the status.
                </p>
                </div>

            </div>
            </div>

            <div className="sm:px-10 bg-footerBg rounded-lg py-10 md:px-5 md:py-5 sxl:pb-24">
            <div className="rounded-full bg-cosBlue text-white grid justify-center items-center sm:w-8 sm:h-8">6
            </div>

            <div className="justify-center items-center sm:flex sm:gap-3">
            <i class="ri-id-card-line text-[35px] text-cosBlue"></i>

            <div className="sm:grid sm:gap-2">
                <h1 className="font-semibold text-[21px]">Distribute Scratch Cards</h1>
                <p className="text-[18px]">After inputting the student scores,distribute
                result checking scratch cards to students. Get
                these cards from our resellers or directly from
                us, delivered promptly. Note: Each card is valid
                for one student per term and can check the
                result up to 5 times. For more details, visit our
                FAQ page.
                </p>
                </div>

            </div>
            </div>

        </div>
     );
}

export default HowItWorks;