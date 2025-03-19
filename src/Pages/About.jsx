import { useLocation } from "react-router-dom";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import { useEffect } from "react";

function About() {
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
      {/* History Section */}
      <div
        id="history"
        className="flex px-32 my-12 justify-between items-center gap-6 scroll-mt-28"
      >
        <div className="w-[600px]">
          <h1 className="text-4xl font-bold mb-2">Our History</h1>
          <p>
            Western University was founded as a university by a sub-decree 72 on
            17 November 2003 by its owner, Mr. Te Laurent. Mr. Laurent also
            started the Western International School in the same year. In 2005
            with the approval of the Ministry of Education, Youth and Sport,
            Western University branch was also established in Kompong Cham
            province. Mr. Laurent, is the Rector of Western University, is a
            graduate of Economic Science in Finance and Banking in University of
            Sorbonne, Paris, France. The University is continually fortifying
            its executive setup and academic processes to enable it to Provide
            high quality education in support of the human resource developments
            that Cambodia needs to support its development. To this end, it has
            embarked on a program to further improve the quality of its teaching
            to reach international standards.
          </p>
        </div>
        <img
          src="img/ceo.jpg"
          alt=""
          className="w-[480px] rounded-xl border-white shadow-md"
        />
      </div>

      {/* Vision, Mission, Goals Section */}

      <div
        id="vision"
        className="flex flex-col px-32 my-14 justify-between items-center gap-6 scroll-mt-28"
      >
        <div className="w-[700px]">
          <h1 className="text-4xl font-bold italic text-blue-600">Vision</h1>
          <div className="divider divide-blue-300 -mt-1"></div>
          <p className="italic font-bold">
            To develop a bright future for people to become leaders with
            creativity and social conscience and responsibilities
          </p>
        </div>
        <div className="w-[700px]">
          <h1 className="text-4xl font-bold italic text-blue-600">Mission</h1>
          <div className="divider divide-blue-300 -mt-1"></div>
          <p className="italic font-bold">
            In adherence to its motto, “Where Quality Comes First”, Western
            University is committed to providing quality education,
            strengthening R&D and entrepreneurship, and upholding the humans’
            values for sustainable development.
          </p>
        </div>

        <div className="w-[700px]">
          <h1 className="text-4xl font-bold italic text-blue-600">Goals</h1>
          <div className="divider divide-blue-300 -mt-1"></div>
          <p className="italic font-bold">
            - Goal 1: Strengthen Governance, Management and Finance <br />
            - Goal 2: Improve Quality of Teaching and Learning <br />
            - Goal 3: Increase Community Services <br />
            - Goal 4: Develop Human Resources <br />
            - Goal 5: Promote R&D and Entrepreneurship <br />
            - Goal 6: Expand Learning and physical resources
          </p>
        </div>
      </div>

      {/* Contact Section */}

      <div id="contact" className="scroll-mt-28">
        <h1 className="font-bold text-4xl text-center">Contact Us</h1>
        <ContactSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default About;
