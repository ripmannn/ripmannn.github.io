import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/json/projectData.json")
      .then((response) => response.json())
      .then((data) => setProject(data.find((item) => item.id === id)));
  }, [id]);

  return (
    <div className="max-w-xl mx-auto text-lg">
      {project ? (
        <div className="space-y-7">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">{project.name}</h1>
          </div>

          <img src={project.image} alt={project.name} className="bg-base-300 w-full rounded-lg" />

          <div className="flex flex-wrap gap-2">
            {project &&
              project.technologies &&
              [...project.technologies].map((item, index) => (
                <div key={index} className="badge badge-neutral">
                  {item}
                </div>
              ))}
          </div>
          <div className="space-y-4">
            <p>{project.sinopsys}</p>
            <p className="text-justify">{project.description}</p>
            <p>
              {project.address ? (
                <>
                  Aplikasi ini dapat di akses di{" "}
                  <a href={project.address} target="_blank" className="link text-base sm:text-lg">
                    {project.address}
                  </a>
                </>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      ) : (
        <div className="btn loading">loading</div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
