import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
    <h2 className="text-3xl font-semibold">Monthly Employers</h2>
    <div className="cards mt-5 flex gap-4">
    <div className="card bg-white w-full  px-9 py-5 rounded-[20px]">
<div className="flex gap-3">
<Image src={"/Photo.png"} width={40} height={40}></Image>

<p  className="my-auto">Yacine Hocine</p>

</div>

    <div className="mt-4 flex justify-between">

    <p className="flex gap-2"> <Image src={"/icons/task.png"} width={20} height={20}></Image> 30 Tasks</p>
    <p className="flex gap-2">4.7/5 <Image src={"/icons/star.png"} width={20} height={20}></Image></p>
    
    </div>
    </div>
    <div className="card bg-white w-full  px-9 py-5 rounded-[20px]">
<div className="flex gap-3">
<Image src={"/Photo.png"} width={40} height={40}></Image>

<p  className="my-auto">Yacine Hocine</p>

</div>

    <div className="mt-4 flex justify-between">

    <p className="flex gap-2"> <Image src={"/icons/task.png"} width={20} height={20}></Image> 30 Tasks</p>
    <p className="flex gap-2">4.7/5 <Image src={"/icons/star.png"} width={20} height={20}></Image></p>
    
    </div>
    </div>
    <div className="card bg-white w-full  px-9 py-5 rounded-[20px]">
<div className="flex gap-3">
<Image src={"/Photo.png"} width={40} height={40}></Image>

<p  className="my-auto">Yacine Hocine</p>

</div>

    <div className="mt-4 flex justify-between">

    <p className="flex gap-2"> <Image src={"/icons/task.png"} width={20} height={20}></Image> 30 Tasks</p>
    <p className="flex gap-2">4.7/5 <Image src={"/icons/star.png"} width={20} height={20}></Image></p>
    
    </div>
    </div>

 


    </div>
    </div>
  );
};

export default Hero;