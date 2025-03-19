import ProgramsCard from "../Components/ProgramsCard";
import { useInView } from 'react-intersection-observer';
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import FeatureProgram from "../Components/FeatureProgram.jsx"
import OurHistory from "../Components/Ourhistory.jsx";

function Home() {
  const programs = [
    {
      image: "img/card.jpg",
      title: "Associate's Degree",
      description:
        "Any student is eligible to pursue a course of Associate’s Degree if he/she graduates from high school or holds an equivalent certificate or if he/she is certified that he/she fails to graduate from high school.",
    },
    {
      image: "img/card.jpg",
      title: "Bachelor's Degree",
      description:
        "Any student is eligible to pursue a course of Bachelor’s Degree if he/she graduates from high school or holds an equivalent certificate or if he/she is certified that he/she fails to graduate from high school.",
    },
    {
      image: "img/card.jpg",
      title: "Master's Degree",
      description:
        "Any student is eligible to pursue a course of Master’s Degree if he/she graduates from high school or holds an equivalent certificate or if he/she is certified that he/she fails to graduate from high school.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 justify-center">
      {/* Hero Section */}
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: "url('img/herobg.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-7xl font-extrabold">Western University</h1>
            <h1 className="mb-5 text-5xl font-extrabold">
              Where Quality Comes First
            </h1>
            <p className="mb-5">
              Our world-class faculty, cutting-edge research facilities, and
              diverse student community create an enriching environment for
              learning and growth. With a legacy spanning over 150 years, we
              continue to shape future leaders and pioneers across all fields of
              study.
            </p>
            <button className="btn btn-primary text-white">Enroll Now</button>
            <button className="btn btn-outline ml-4 text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* HistorySection */}
      <OurHistory/>

      {/* Programs Section */}
      <FeatureProgram programs={programs} />

      {/* Why Choose Us Section */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <h1 className="text-5xl font-extrabold">
          Why Choose Western University?
        </h1>
        <div className="divider"></div>

        <div className="flex flex-col items-center justify-center w-2/4">
          <div className="flex items-start justify-between ">
            <h2 className="text-2xl font-bold">Research Opportunities</h2>
            <p className="text-lg w-[60%]">
              Engage in cutting-edge research projects alongside our esteemed
              faculty. From business innovation to technological advancements,
              we offer numerous opportunities for hands-on learning and
              discovery.
            </p>
          </div>
          <div className="divider"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-2/4">
          <div className="flex items-start justify-between ">
            <h2 className="text-2xl font-bold">Research Opportunities</h2>
            <p className="text-lg w-[60%]">
              Engage in cutting-edge research projects alongside our esteemed
              faculty. From business innovation to technological advancements,
              we offer numerous opportunities for hands-on learning and
              discovery.
            </p>
          </div>
          <div className="divider"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-2/4">
          <div className="flex items-start justify-between ">
            <h2 className="text-2xl font-bold">Research Opportunities</h2>
            <p className="text-lg w-[60%]">
              Engage in cutting-edge research projects alongside our esteemed
              faculty. From business innovation to technological advancements,
              we offer numerous opportunities for hands-on learning and
              discovery.
            </p>
          </div>
          <div className="divider"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-2/4">
          <div className="flex items-start justify-between ">
            <h2 className="text-2xl font-bold">Research Opportunities</h2>
            <p className="text-lg w-[60%]">
              Engage in cutting-edge research projects alongside our esteemed
              faculty. From business innovation to technological advancements,
              we offer numerous opportunities for hands-on learning and
              discovery.
            </p>
          </div>
          <div className="divider"></div>
        </div>
      </div>

      {/* Contact Section*/}
      <h1 className="font-extrabold text-4xl">Get In Touch</h1>
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;