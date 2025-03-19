import PropTypes from "prop-types";

const ProgramsCard = ({ image, title, description }) => {
  ProgramsCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    
    <div className="card bg-transparent w-80">
      <figure className="bg-contain max-h-[240px]">
        {image && <img src={image} alt="card" />}
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{title}</h2>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default ProgramsCard;
