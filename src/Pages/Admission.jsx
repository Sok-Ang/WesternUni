import Footer from "../Components/Footer";
import SmallEventCard from "../Components/SmallEventCard";
import { allEvents } from "../events";

function Admission() {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <div
        className="hero h-[50vh]"
        style={{
          backgroundImage: "url('img/hero.JPG')",
        }}
      ></div>

      <div className="text-center w-[60vw]">
        <h1 className="font-bold text-2xl mb-4">Application Form</h1>
        <p className="">
          សាកលវិទ្យាល័យវេស្ទើនសូមជូនដំណឹងដល់និស្សិតថ្នាក់បរិញ្ញាប័ត្ររងនិងបរិញ្ញាបត្រឆ្នាំទី
          ១ ឆមាសទីមួយជំនាន់ទី ២២ សម្រាប់ឆ្នាំសិក្សា ២០២៤​ ២០២៥ 
          ឲ្យបានជ្រាបថាការបរិច្ឆេទសំខាន់មានដូចខាងក្រោម៖
        </p>
      </div>
      <h2 className="font-bold text-2xl -mb-4 underline">Registration Form</h2>

      <div className="flex w-[70] gap-10">
        <div>
          <div className="flex">
            <img
              className="w-[290.5px] h-fit rounded-sm m-1"
              src="/public/admission/1.jpg"
              alt="tempDoc"
            />
            <img
              className="w-[290.5px] h-fit rounded-sm m-1"
              src="/public/admission/2.jpg"
              alt="tempDoc"
            />
          </div>
          <img
            className="w-[590px] h-fit rounded-sm m-1"
            src="/public/admission/3.jpg"
            alt="tempDoc"
          />
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

export default Admission;
