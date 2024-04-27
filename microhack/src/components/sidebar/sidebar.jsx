"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const Sidebar = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <div className="max-w-[300px] bg-white h-screen px-[30px] py-[20px] flex flex-col justify-evenly ">
       <Link href={"/"}><img src={"/logo.png"} className="scale-75" alt="logo" /></Link> 
        .
        <div className="links flex flex-col gap-5">

            <Link href={"/dashboard"} className= {pathname=="/dashboard"? "text-black bg-[#F5F5F7] fill-black rounded-[10px] flex gap-2  px-4 py-2 " : "text-[#8E8FFA] px-4 py-2 flex gap-2 fill-primary" } ><img src={"/icons/overview.svg"}/> Overview</Link>
            <Link href={"/dashboard/projects"} className= {pathname.includes("/dashboard/projects")? "text-black bg-[#F5F5F7] fill-black rounded-[10px] flex gap-2  px-4 py-2 " : "text-[#8E8FFA] px-4 py-2 flex gap-2 " } ><img fill="#7752FE" className="fill-primary text-primary" src={"/icons/book.svg"}/> Projects</Link>
            <Link href={"/dashboard/users"} className= {pathname=="/dashboard/employers"? "text-black bg-[#F5F5F7] fill-black rounded-[10px] flex gap-2  px-4 py-2 " : "text-[#8E8FFA] px-4 py-2 flex gap-2 fill-primary" } ><img src={"/icons/user.svg"}/> Employers</Link>
            <Link href={"/dashboard/settings"} className= {pathname=="/dashboard/settings"? "text-black bg-[#F5F5F7] fill-black rounded-[10px] flex gap-2  px-4 py-2 " : "text-[#8E8FFA] px-4 py-2 flex gap-2 fill-primary"} ><img src={"/icons/setting.svg"}/> Settings</Link>
            <Link href={"/dashboard/chat"} className= {pathname=="/dashboard/chat"? "text-black bg-[#F5F5F7] fill-black rounded-[10px] flex gap-2  px-4 py-2 " : "text-[#8E8FFA] px-4 py-2 flex gap-2 fill-primary"} ><img src={"/icons/chat.svg"}/> Messages</Link>

        </div>
        <div className="help text-white relative text-center bg-primary h-[250px] py-8 mi px-8 rounded-[10px] overflow-hidden">
    <div className="rounded-[50%] bg-[#8E8FFA] absolute -bottom-6 -right-6 w-[70px] h-[70px]"></div>
    <div className="rounded-[50%] bg-[#8E8FFA] absolute -top-6 -left-6 w-[70px] h-[70px]"></div>
    <h3 className="text-2xl">
        Help Center
    </h3> 
    <div className="">
        <p className="text-sm mt-2">Having Trouble in Learning. Please contact us for more questions.</p>
        <p className="py-3 px-10 mt-6 bg-white rounded-[10px] text-black" href={"/"}>Help</p>
    </div>
</div>


       
    </div>
  );
};

export default Sidebar