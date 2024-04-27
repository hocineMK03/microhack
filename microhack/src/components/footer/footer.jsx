"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";



const Footer = () => {

  return (
    <div className="bg-[#F0EEFC] md:px-[120px] flex justify-between py-[50px]">

    <div className="md:flex flex-col justify-between">
        <img src={"/logo.png"} alt="" />
        <div className="Links flex justify-between">
            <Link href={"/"}><Image src={"/socials/fb.png"} width={20} height={20}></Image></Link>
            <Link href={"/"}><Image src={"/socials/twt.png"} width={20} height={20}></Image></Link>
            <Link href={"/"}><Image src={"/socials/yt.png"} width={20} height={20}></Image></Link>
            <Link href={"/"}><Image src={"/socials/inst.png"} width={20} height={20}></Image></Link>

        </div>
    </div>

    <div className="flex flex-col justify-between">
        <h4 className="text-primary font-medium text-lg">Features</h4>
        <p className="text-primary opacity-70 text-sm">Cannada</p>
        <p className="text-primary opacity-70 text-sm">Alaska</p>
        <p className="text-primary opacity-70 text-sm">France</p>
        <p className="text-primary opacity-70 text-sm">Iceland</p>
    </div>

    <div className="flex flex-col justify-between">
        <h4 className="text-primary font-medium text-lg">Company</h4>
        <Link className="text-primary opacity-70 text-sm" href={"/"}>About Us</Link>
        <Link className="text-primary opacity-70 text-sm" href={"/"}>Careers</Link>
        <Link className="text-primary opacity-70 text-sm" href={"/"}>Contact Us</Link>
        
    </div>

    <div className="flex flex-col justify-between">
        <h4 className="text-primary font-medium text-lg">Help</h4>
        <Link className="text-primary opacity-70 text-sm" href={"/"}>Account Center</Link>  
        <Link className="text-primary opacity-70 text-sm" href={"/"}>Q&A</Link>
        <Link className="text-primary opacity-70 text-sm" href={"/"}>Guide</Link>


    </div>


    </div>
    
  );
};

export default Footer;