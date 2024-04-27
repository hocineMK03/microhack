import Hero from "@/components/hero/hero";
import Newsletter from "@/components/newsletter/newsletter";
import Pricing from "@/components/pricings/pricing";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="lg:mx-[120px]">
        <Hero />

        <div className="features text-center">
          <div>
            <h3 className="text-3xl">Features</h3>
          </div>

          <div className="mt-10 flex justify-evenly">
            <div className="flex flex-col items-center gap-[30px]">
              <div className="flex justify-center">
                <Image width={35} height={35} src={"/project.png"}></Image>
              </div>
              <p>Project creation</p>
            </div>

            <div className="flex flex-col items-center gap-[30px]">
              <div className="flex justify-center">
                <Image width={35} height={35} src={"/task.png"}></Image>
              </div>
              <p>Task assignment</p>
            </div>

            <div className="flex flex-col items-center gap-[30px]">
              <div className="flex justify-center">
                <Image width={35} height={35} src={"/comm.png"}></Image>
              </div>
              <p>Communication</p>
            </div>
          </div>
        </div>

        <div id="about" className="about mt-[80px]">
          <h3 className="text-center text-3xl">About us</h3>
          <div className="md:flex justify-between ">
            <img src={"/about.png"} alt="" />

            <div className="flex flex-col justify-center gap-8">
              <p>
                Taskit is a Company specializes in facilitation for businesses
                of all sizes. ensuring efficient delegation of tasks, clear
                communication channels, and timely delivery of results, enhances
                productivity, and empowers teams to achieve their goals with
                precision and clarity.
              </p>
              <div>
                <Link
                  className="bg-primary text-white py-[10px] rounded-[4px] px-[20px]"
                  href={"/"}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Pricing  />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
