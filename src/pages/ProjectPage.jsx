import { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("/json/projectData.json")
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <>
      <h1 className="text-5xl font-bold">Portofolio</h1>
      <p>Saya telah mengerjakan berbagai proyek web development yang menantang, baik sendiri maupun bersama tim. Setiap proyek adalah kesempatan untuk belajar dan berkembang. Mari lihat hasilnya—siapa tahu, kita bisa menciptakan sesuatu yang luar biasa bersama! 🚀✨.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {datas.map((data) => (
          <ProjectCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
