
import Link from "next/link";
import Sidebar from "@/components/sidebar/sidebar";
const Task = ({ params}) => {
    const { id } = params;
   
  return (
    <div className="flex justify-start min-w-full  min-h-screen bg-[#FAFAFA]">
      <Sidebar/>
        <p>{id}</p>
    </div>
  );
};

export default Task;