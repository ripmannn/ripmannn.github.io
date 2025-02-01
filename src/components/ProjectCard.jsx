import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = ({ data }) => {
  return (
    <Link
      to={`/project/${data.id}`}
      className="card bg-base-200 hover:scale-105 transition-all cursor-pointer"
    >
      {data.image && (
        <figure className="aspect-video">
          <img src={data.image} alt="" className="bg-base-300 w-full h-full" />
        </figure>
      )}
      <div className="card-body">
        <h3 className="card-title">{data.name}</h3>
        <div className="flex gap-1">
          {data.platform.map((item, index) => (
            <div key={index} className="badge badge-neutral badge-sm">
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm">{data.sinopsis}</p>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string, // Optional
      sinopsis: PropTypes.string.isRequired,
      status: PropTypes.string, // Optional
      image: PropTypes.string, // Optional
      platform: PropTypes.arrayOf(PropTypes.string).isRequired,
      address: PropTypes.string, // Optional
      technologies: PropTypes.arrayOf(PropTypes.string), // Optional
    }).isRequired,
  };

export default ProjectCard;