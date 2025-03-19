import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admission from "./Pages/Admission";
import Institutes from "./Pages/Institutes";
import Activity from "./Pages/Activity";
import InternationalProgram from "./Pages/InternationalProgram";
import EventSwiper from "./Components/EventSwiper";

import EventPage from "./Pages/EventPage";
import { useEffect } from "react";
import Scholarship from "./Pages/Scholarship";
import Marketing from "./Pages/Institutions/market";
import ComputerScience from "./Pages/Institutions/cs";
import Aec from "./Pages/Institutions/aec";
import EnglishCommunication from "./Pages/Institutions/ec";
import Literature from "./Pages/Institutions/literature";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollTop />
      <div className="min-h-screen w-full p-0 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />}></Route>
          <Route path="/scholarship" element={<Scholarship />}></Route>
          <Route path="/institutes" element={<Institutes />}></Route>
          <Route path="/institutes/market" element={<Marketing />} />
          <Route path="/institutes/cs" element={<ComputerScience />} />
          <Route path="/institutes/aec" element={<Aec />} />
          <Route path="/institutes/ec" element={<EnglishCommunication />} />
          <Route path="/institutes/literature" element={<Literature />} />

          <Route path="/activity">
            <Route index element={<Activity />} />
            <Route path=":id" element={<EventPage />} />
          </Route>

          <Route
            path="/international-program"
            element={<InternationalProgram />}
          ></Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
