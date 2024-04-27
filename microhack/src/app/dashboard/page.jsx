import Sidebar from "@/components/sidebar/sidebar";
import Monthlyemployers from "@/components/mothlyEmployers/monthlyemployers";
import ThreeProjects from "@/components/threeProjects/ThreeProjects"
import Link from "next/link";
import projects from "../dashboard/projects.json";
import Router from "next/navigation";
import axios from "axios";

const Dashboard =  () => {
  return (
    <div className="flex justify-start min-w-full   min-h-screen bg-[#FAFAFA]">
      <Sidebar />
      <div className="w-full  p-10">
        <p>Hello User</p> <br />


        <Monthlyemployers/>
        <div className="pt-9">
  <h2 className="text-3xl font-semibold">Recent Posts</h2>
  <ThreeProjects/>
</div>


      </div>
    </div>
  );
};

export default Dashboard;
