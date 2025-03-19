import { allEvents } from "../../events";
import Footer from "../../Components/Footer";
import SmallEventCard from "../../Components/SmallEventCard";

function ComputerScience() {

    const images = [
        "./CS/1.jpg",
        "./CS/2.jpg",
        "./CS/3.jpg",
    ]
    return (
        <div className="flex flex-col items-center justify-center gap-10">
        <div
        className="hero h-[50vh]"
        style={{
        backgroundImage: "url('../../img/hero.JPG')",
        }}
    ></div>
        <div className="text-center w-[60vw]">
            <h1 className="font-bold text-2xl mb-4">Computer Science</h1>
            <p className="">Welcome to Computer Science where you can do coding!!(No you Not) </p>
        </div>

        <div className="flex w-[70vw] gap-10">
            {/* Stacked Images */}
            <div className="flex flex-col gap-4">
            <img
                className="w-[581px] h-auto rounded-xl"
                src="/public/MajorsImages/CS/1.jpg" // First image
                alt="Computer Science Image 1"
            />
            <img
                className="w-[581px] h-auto rounded-xl"
                src="/public/MajorsImages/CS/2.jpg" // Second image
                alt="Computer Science Image 2"
            />
            <img
                className="w-[581px] h-auto rounded-xl"
                src="/public/MajorsImages/CS/3.jpg" // Second image
                alt="Computer Science Image 2"
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
        <Footer/>
    </div>
    );
  }
  export default ComputerScience;