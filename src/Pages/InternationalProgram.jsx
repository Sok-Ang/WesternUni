import Footer from "../Components/Footer";
import SmallEventCard from "../Components/SmallEventCard";
import { allEvents } from "../events";

function InternationalProgram() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div
        className="hero h-[50vh]"
        style={{
          backgroundImage: "url('img/hero.JPG')",
        }}
      ></div>

      <div className="text-center w-[90vh]">
        <h1 className="font-bold text-2xl mb-4">Office of Education</h1>
        <p className="">
          The "Offices" section of a website, especially for an educational
          institution like a university, typically lists key departments or
          offices that provide specific services to students, faculty, and
          staff. It's a way to organize information and make it easily
          accessible to users.
        </p>
      </div>

      <h2 className="font-bold text-2xl mb-4 underline">
        On the Withdrawal of Temporary Certificate
      </h2>

      <div className="flex w-[70] gap-10">
        <img
          className="w-[581px]"
          src="/public/img/document1 .jpg"
          alt="tempDoc"
        />
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

export default InternationalProgram;
