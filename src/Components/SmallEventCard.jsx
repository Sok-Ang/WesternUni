import { Link } from "react-router-dom";


const SmallEventCard = ({
  image,
  title,
  summary,
  id,
}) => {
  return (
    <Link
      to={`/activity/${id}`}
      className="card hover:bg-slate-100 bg-transparent w-full flex flex-col mb-2 p-1"
    >
      <div className="flex gap-4">
        <figure className="bg-contain rounded-xl w-auto h-[6rem]">
          {image && <img src={image} alt="news" />}
        </figure>
        <div>
          <h2 className="font-semibold text-xs line-clamp-2 mb-2">{title}</h2>
          <p className="text-xs line-clamp-3">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallEventCard;
