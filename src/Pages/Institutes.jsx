import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import SmallEventCard from "../Components/SmallEventCard";
import { allEvents } from "../events";

function Institutes() {
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
  }, [location.hash]); // Add dependency array

  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <div
        className="hero h-[50vh]"
        style={{
          backgroundImage: "url('img/hero.JPG')",
        }}
      ></div>

      <div className="text-center w-[60vw]">
        <h1 className="font-bold text-2xl mb-4">
          Institution of Digital Technology
        </h1>
        <p>
          Digital technology means electronic tools, devices, systems, and
          resources organizations utilize as they process or store data and
          complete many other functions, increasing employee productivity and
          efficiency.
        </p>
      </div>

      <h2 className="font-bold text-2xl -mb-4 underline">
        Bachelor of Computer Science
      </h2>

      <div className="flex w-[70vw] gap-10">
        <div className="flex flex-col gap-2">
          <img
            className="w-[581px] h-fit rounded-sm"
            src="/img/cs1.jpg" // Remove /public from the path
            alt="Computer Science Image 1"
          />
          <img
            className="w-[581px] h-fit rounded-sm"
            src="/img/cs2.jpg" // Remove /public from the path
            alt="Computer Science Image 2"
          />
        </div>

        <div>
          <h2 className="font-bold m-2 text-xl">News & Events</h2>
          <div className="w-[30vw] h-[120vh] overflow-y-auto">
            {allEvents.map((event) => (
              <SmallEventCard
                key={event.id} // Add key prop
                id={event.id}
                title={event.title}
                image={event.image}
                summary={event.summary}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Institutes;
