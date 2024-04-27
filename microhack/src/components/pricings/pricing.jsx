import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
  return (
    <div id="price" className="mb-12">
       
       <h2 className="text-5xl font-semibold text-center">Choose a Plan <br />That's Right For You</h2>
       <p className="text-[#A6A6A6] text-center mt-4">Choose plan that works best for you, feel free to contact us</p>






       <div className="offers lg:flex md:mx-3 justify-center mt-5 gap-10">

            <div className="offer mt-8 shadow-md rounded-[20px] px-2 text-center py-9 pt-11">
                <h3 className="font-medium  text-4xl text-center">Basic</h3>

                <p className="text-[#A6A6A6] text-center ">Have a go  and test your  superpowers</p>

                <div className="price mt-2 text-center">
                    <p className="text-[#A6A6A6] -ml-8">$</p>
                    <p className="font-semibold text-5xl ">0</p>
                </div>

                <div className="details mt-2 font-medium bg-[#F9FAFB] py-6 px-7 flex  flex-col rounded-[10px] gap-2">

                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Up to 10 users/workers.</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Limited to 100 tasks per month</p>
                    <p className="flex gap-2"><Image src={"/icons/false.png"} width={25} height={15} alt="check"></Image>customization options</p>
                    <p className="flex gap-2"><Image src={"/icons/false.png"} width={25} height={15} alt="check"></Image> Customization options.</p>
                    <p className="flex gap-2"><Image src={"/icons/false.png"} width={25} height={15} alt="check"></Image> 24/  support</p>

                    <Link href={"/register"} className="text-primary font-medium bg-white mx-2 mt-2 text-center py-4 rounded-[20px]  hover:text-white hover:bg-primary duration-200 ease-in">Signup for free</Link>

                </div>
            </div>
            <div className="offer relative mt-8 shadow-md rounded-[20px] px-4 py-9 pt-11 scale-110 bg-primary">
                <h3 className="font-medium  text-4xl text-center text-white">Standard</h3>

                <p className="text-[#fff] text-center ">Experiment the power of infinite possibilities</p>

                <div className="price mt-2 text-center">
                    <p className="text-[#A6A6A6] -ml-8">$</p>
                    <p className="font-semibold text-5xl text-white">8</p>
                </div>
                <p className="bg-primary px-5 py-2 text-center text-white rounded-[10px]">Most Popular</p>
                <div className="bg-[#C7C7FC] rounded-[50%] w-full absolute top-0  "></div>
                <div className="details mt-2 font-medium bg-[#F9FAFB] py-6 px-2 text-center flex  flex-col rounded-[10px] gap-2">

                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Up to 50 users/workers.</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Up to 500 tasks per month.</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Customization options</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Access to advanced tools.</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> 24/  support</p>

                    <Link href={"/register"} className="text-primary font-medium bg-white mx-2 mt-2 text-center py-4 rounded-[20px]  hover:text-white hover:bg-primary duration-200 ease-in">Signup for free</Link>

                </div>
            </div>

            <div className="offer mt-8 shadow-md rounded-[20px] px-4 py-9 pt-11">
                <h3 className="font-medium  text-4xl text-center">Premiun</h3>

                <p className="text-[#A6A6A6] text-center ">Unveil new superpowers and join the Design Leaque</p>

                <div className="price mt-2 text-center">
                    <p className="text-[#A6A6A6] -ml-8">$</p>
                    <p className="font-semibold text-5xl ">0</p>
                </div>

                <div className="details mt-2 font-medium bg-[#F9FAFB] py-6 px-2 text-center flex  flex-col rounded-[10px] gap-2">

                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Unlimited users/workers.</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Unlimited tasks per month.</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Customization options</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> Access to advanced tools</p>
                    <p className="flex gap-2"><Image src={"/icons/check.png"} width={25} height={15} alt="check"></Image> 24/  support</p>

                    <Link href={"/register"} className="text-primary font-medium bg-white mx-2 mt-2 text-center py-4 rounded-[20px]  hover:text-white hover:bg-primary duration-200 ease-in">Signup for free</Link>

                </div>
            </div>




       </div>
    
  
    </div>
  );
};

export default Pricing;