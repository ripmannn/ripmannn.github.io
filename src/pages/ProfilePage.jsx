import { Flame, SquareTerminal } from "lucide-react";
import { BsBootstrapFill } from "react-icons/bs";
import { FaCloud, FaDatabase, FaGithub } from "react-icons/fa";
import { FaFireFlameCurved, FaLaravel, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

const ProfilePage = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="flex-1 space-y-7">
          <h1 className="text-5xl font-bold">Hallo</h1>
          <p className="text-justify">
            Mahasiswa Sistem Informasi yang passionate di bidang web development, menguasai HTML, CSS, JavaScript, dan framework seperti React.js atau Laravel. Memiliki pengalaman membangun website portofolio dan aplikasi pemesanan makanan
            dan minuman serta POS selama kuliah. Cepat belajar, memiliki kemampuan problem-solving, dan siap berkontribusi sebagai web developer profesional.
          </p>
          <a href="CV-Arief-Rahman-Pratama.pdf" download className="btn btn-primary-content btn-outline mt-2 shadow-lg ">
            Download CV
          </a>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <div className="w-full md:w-48 rounded-lg mx-auto">
              <img src="aku.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">
              <SquareTerminal className="stroke-primary fill-primary/30" size={35} />
              <span>Framework</span>
            </h2>
            <p>Saya menggunakan framework untuk mempercepat waktu pengerjaan project saya, berikut framework yang saya gunakan : </p>
            <div className="card-body bg-base-300 p-5 text-left rounded-lg flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaLaravel className=" fill-red-500" />
                <span>Laravel</span>
              </div>
              <hr className="border-b-1 border-stone-300" />
              <div className="flex items-center gap-2">
                <FaFireFlameCurved className=" fill-red-500" />
                <span>Codeignier</span>
              </div>
              <hr className="border-b-1 border-stone-300" />
              <div className="flex items-center gap-2">
                <FaReact className=" fill-blue-500" />
                <span>React JS</span>
              </div>
              <hr className="border-b-1 border-stone-300" />
              <div className="flex items-center gap-2">
                <RiTailwindCssFill className=" fill-teal-500" />
                <span>Tailwind</span>
              </div>
              <hr className="border-b-1 border-stone-300" />
              <div className="flex items-center gap-2">
                <BsBootstrapFill className=" fill-violet-500" />
                <span>Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">
              <Flame className="stroke-primary fill-primary/30" size={35} />
              <span >Backend</span>
            </h2>
            <div>Dalam membuat project perlu adanya bantuan backend atau database berikut yang saya gunakan.</div>
            <div className=" bg-base-300 p-5 text-left rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <FaDatabase className=" fill-orange-500" />
                <span>MySQL</span>
              </div>
              <hr className="border-b-1 border-stone-300" />
              <div className="flex items-center gap-2">
                <FaCloud className=" fill-red-500" />
                <span>Restful API</span>
              </div>
              <hr className="border-b-1 border-stone-300" />
              <div className="flex items-center gap-2">
                <FaGithub className=" fill-black" />
                <span>Git - Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
