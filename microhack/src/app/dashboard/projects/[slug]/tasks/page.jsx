
import Link from "next/link";
import Sidebar from "@/components/sidebar/sidebar";

const Tasks = () => {

  return (
    <div className="flex justify-start min-w-full  min-h-screen bg-[#FAFAFA]">
      <Sidebar/>
        <p>Tasks</p>
    </div>
  );
};

export default Tasks;