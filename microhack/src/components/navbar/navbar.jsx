"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";



const Navbar = () => {

  return (
    <div className="border-b border-b-black px-[120px] flex justify-between py-[20px]">
        <Link href={"/"}><img src={"/logo.png"} alt="logo" /></Link>
        <div className="links w-full  flex pt-[10px] justify-center  gap-[30px]">
    <Link  className="font-medium text-[16px]" href={"/"}>Home</Link>
    <Link className="font-medium text-[16px]" href={"#price"}>Payement</Link>
    <Link className="font-medium text-[16px]" href={"#about"}>About Us</Link>
    <Link className="font-medium text-[16px]" href={"/"}>Help</Link>
</div>


        <Link href={"/dashboard"} className="px-[30px] text-white py-[10px] align-center text-center rounded-[4px] bg-primary">Register</Link>
    </div>
  );
};

export default Navbar;