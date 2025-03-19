import { allEvents } from "../../events";
import Footer from "../../Components/Footer";
import SmallEventCard from "../../Components/SmallEventCard";

function Aec() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div
        className="hero h-[50vh]"
        style={{
          backgroundImage: "url('../../img/hero.JPG')",
        }}
      ></div>
      <div className="text-center w-[60vw]">
        <h1 className="font-bold text-2xl mb-4">Som Nong 2025</h1>
        <p className="">Tver som nong and build town hall 16</p>
      </div>

      <div className="flex w-[70] gap-10">
        <div className="flex flex-col gap-4">
          <img
            className="w-[581px] h-auto rounded-xl"
            src="/public/MajorsImages/architeture/1.jpg" // First image
            alt="Computer Science Image 1"
          />
          <img
            className="w-[581px] h-auto rounded-xl"
            src="/public/MajorsImages/architeture/2.jpg" // First image
            alt="Computer Science Image 1"
          />
          {/* Add more images as needed */}
        </div>
        <div>
          <h2 className="font-bold m-2 text-xl">News & Events</h2>
          <div className="w-[30vw] h-[120vh] overflow-y-auto">
            {allEvents.map((allEvents) => (
              <SmallEventCard
                id={allEvents.id}
                title={allEvents.title}
                image={allEvents.image}
                summary={allEvents.summary}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Aec;
