import { MapPinSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const EventCard = ({ image, title, summary, content , date, location, id }) => {
  return (
    <Link
      to={`/activity/${id}`}
      className="card border bg-transparent w-60 h-72 flex flex-col gap-2"
    >
      <figure className="bg-contain w-60 h-3/5">
        {image && <img src={image} alt="card" />}
      </figure>
      <div className="p-2">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-semibold text-blue-600">{date}</h3>
          <div className="flex">
            <MapPinSimple size={14} />
            <h2 className="text-xs font-semibold">{location}</h2>
          </div>
        </div>
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="text-xs text-gray-500 line-clamp-3">{summary}</p>
      </div>
    </Link>
  );
};

export default EventCard;
