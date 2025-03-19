import { useParams } from "react-router-dom";
import { allEvents } from "../events";
import Footer from "../Components/Footer";

const EventPage = () => {
  const { id } = useParams();

  const event = allEvents.find((event) => event.id === Number(id));

  return (
    <div>
      <div className="px-48 my-12 flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-bold">{event.title}</h1>
        <div className="flex flex-col">
          <div className="divider w-96 self-center -mt-2"></div>
          <h2 className="text-sm flex items-center justify-between -mt-2">
            <span>
              Venue:{" "}
              <span className="font-bold text-blue-600">{event.location}</span>
            </span>
            <span>
              Date:{" "}
              <span className="font-bold text-blue-600">{event.date}</span>
            </span>
          </h2>
        </div>
        <img src={event.image} alt="" className="w-96 rounded-xl" />
        <p className="text-lg whitespace-pre-wrap w-[35rem]">{event.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;
