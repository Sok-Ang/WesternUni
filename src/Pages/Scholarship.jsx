import Footer from "../Components/Footer";
import SmallEventCard from "../Components/SmallEventCard";
import { allEvents } from "../events";
function Scholarship() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div
        className="hero h-[50vh]"
        style={{
          backgroundImage: "url('img/hero.JPG')",
        }}
      ></div>

      <div className="text-center w-[60vw]">
        <h1 className="font-bold text-2xl mb-4">Scholarship</h1>
        <p className="">
          Study hard for your family, but choose a study skill for your dreams!
          <br />
          ប្រឹងរៀនដើម្បីគ្រួសារតែត្រូវជ្រើសរើសជំនាញសិក្សាមួយដើម្បីក្តីស្រមៃរបស់ខ្លួនឯង!
          ផ្តល់ជូនអាហារូបករណ៍ស្វ័យប្រវត្តិតាមនិទ្ទេស (គ្រប់ឆ្នាំសិក្សាទាំងអស់)
          ដោយមិនឆ្លងកាត់ការប្រឡង សម្រាប់ថ្នាក់បរិញ្ញាបត្រ និងថ្នាក់បរិញ្ញាបត្ររង
          គ្រប់ជំនាញទាំងអស់ មួយចប់កម្មវិធីសិក្សា។
        </p>
      </div>

      <div className="flex w-[70] gap-10">
        <img
          className="w-[581px] h-fit rounded-xl"
          src="/public/img/scholarship.jpg"
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
export default Scholarship;
