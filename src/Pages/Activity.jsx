import { useLocation } from "react-router-dom";
import EventCard from "../Components/EventCard";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { featuredEvent, upcomingEvent, postEvent } from "../events";

function Activity() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });



  return (
    <div>
      {/* Event cards*/}
      <div
        id="featuredEvent"
        className="w-[100vw] flex flex-col items-center scroll-mt-24"
      >
        <div className="my-10 font-bold text-4xl">Featured Events</div>
        <div className="grid grid-cols-4 gap-5">
          {featuredEvent.map((featuredEvent) => (
            <EventCard
              id={featuredEvent.id}
              date={featuredEvent.date}
              key={featuredEvent.id}
              image={featuredEvent.image}
              title={featuredEvent.title}
              location={featuredEvent.location}
              summary={featuredEvent.summary}
            />
          ))}
        </div>

        {/* Upcoming Events */}
        <div
          id="upcomingEvent"
          className="my-10 font-bold text-4xl scroll-mt-24"
        >
          Upcoming Events
        </div>
        <div className="grid grid-cols-4 gap-4">
          {upcomingEvent.map((upcomingEvent) => (
            <EventCard
              id={upcomingEvent.id}
              key={upcomingEvent.id}
              date={upcomingEvent.date}
              image={upcomingEvent.image}
              title={upcomingEvent.title}
              location={upcomingEvent.location}
              summary={upcomingEvent.summary}
            />
          ))}
        </div>

        {/* Post-Events Summary */}
        <div id="postEvent" className="my-10 font-bold text-4xl scroll-mt-24">
          Post-Events Summary
        </div>
        <div className="grid grid-cols-4 gap-4">
          {postEvent.map((postEvent) => (
            <EventCard
              id={postEvent.id}
              key={postEvent.id}
              date={postEvent.date}
              image={postEvent.image}
              title={postEvent.title}
              location={postEvent.location}
              summary={postEvent.summary}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Activity;
