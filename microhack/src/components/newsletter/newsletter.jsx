import React from "react";
import Image from "next/image";
import Link from "next/link";

const Newsletter = () => {
  return (
    <div className="mx-[-120px] px-[120px] bg-[#F0EEFC] pt-[30px] ">
       
        <div className="bg-[#ddeae6] w-full md:flex justify-between gap-[60px] px-[20px] rounded-[25px]">
            <div className="mt-[30px]  flex flex-col flex-1 justify-between pb-10">
                <h3 className="text-primary md:text-5xl text-3xl sm:mt-4 sm:ml-3 m0 font-bold">Subscribe To Our <br/> Newsletter</h3>
                <form action="" className="flex gap-1">
                    <input className="py-[8px] rounded-[4px] w-full  pl-3" placeholder="Your Email Adress" type="text" /> <button type="submit" className="text-white bg-primary rounded-[4px] px-[23px] py-[8px]">Submit</button>
                </form>

            </div>
            <img src={"/mailbox.png"} className=" flex-[0.5]" alt="" />
        </div>
  
    </div>
  );
};

export default Newsletter;