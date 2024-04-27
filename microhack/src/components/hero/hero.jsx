import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="lg:px-[120px] h-screen flex flex-col justify-evenly ">
        <div className="">
                   <h1 className="text-center text-5xl font-bold">"Empower Your Team: Revolutionize <span className="text-primary ">Task Management</span> with Our Solution"</h1> <br />
       <div className="flex justify-center">
               <Link href={"/register"} className="px-[20px]  text-white py-[10px] align-center text-center rounded-[4px] bg-primary">Join Us</Link>
       </div>

        </div>

       <div class="grid grid-cols-4">
  <div class="aspect-w-1 aspect-h-1">
  <img src={"/one.png"} className="object-cover w-full h-full" alt="" />
  </div>
  <div class="aspect-w-1 aspect-h-1">
  <img src={"/two.png"} class="object-cover w-full h-full" alt="" />
  </div>
  <div class="aspect-w-1 aspect-h-1">
  <img src={"/three.png"} class="object-cover w-full h-full" alt="" />
  </div>
  <div class="aspect-w-1 aspect-h-1">
  <img src={"/four.png"} class="object-cover w-full h-full" alt="" />
  </div>
</div>

  
    </div>
  );
};

export default Hero;