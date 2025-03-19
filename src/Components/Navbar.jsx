import { GraduationCap } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navigationRef = useRef(null);

  const handleToggleNavigation = (e) => {
    if (!navigationRef.current) return;

    const parentElement = e.currentTarget.parentElement;
    const detailElements = navigationRef.current.querySelectorAll("details");

    detailElements.forEach((el) => {
      if (el !== parentElement) {
        el.removeAttribute("open");
      }
    });
  };

  useEffect(() => {
    if (!navigationRef.current) return;

    // Close the navigation when the user clicks outside the navigation
    const handleClickOutside = (e) => {
      if (!navigationRef.current.contains(e.target)) {
        const detailElements =
          navigationRef.current.querySelectorAll("details");

        detailElements.forEach((el) => {
          el.removeAttribute("open");
        });
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Close the navigation when user click on the link
    const handleLinkClick = () => {
      const detailElements = navigationRef.current.querySelectorAll("details");

      detailElements.forEach((el) => {
        el.removeAttribute("open");
      });
    };

    navigationRef.current.querySelectorAll("a").forEach((el) => {
      el.addEventListener("click", handleLinkClick);
    });

    return () => {
      document.removeEventListener("click", handleClickOutside);
      navigationRef.current.querySelectorAll("a").forEach((el) => {
        el.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="navbar bg-base-100 px-4 z-10 sticky top-0 drop-shadow-lg">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        {/* Home / Logo */}
        <Link
          to="/"
          className="text-xl font-bold"
          onClick={handleToggleNavigation}
        >
          <img src="/logo.png" alt="logo" className="w-12 h-auto" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1" ref={navigationRef}>
          {/* About us */}
          <li>
            <details>
              <summary onClick={handleToggleNavigation}>About Us</summary>
              <ul className="p-2 w-52">
                <li>
                  <Link to="/about#history">History</Link>
                </li>
                <li>
                  <Link to="/about#vision">Vision , Mission, Goals</Link>
                </li>
                {/* <li>
                  <Link to="/about#goals">WU Structure</Link>
                </li> */}
                <li>
                  <Link to="/about#contact">Contact Us</Link>
                </li>
              </ul>
            </details>
          </li>
          {/* Institute */}
          <li>
            <details>
              <summary onClick={handleToggleNavigation}>Institutes</summary>
              <ul className="p-2 w-52">
                <li>
                  <Link to="/institutes/market">Marketing</Link>
                </li>
                <li>
                  <Link to="/institutes/cs">Computer Science</Link>
                </li>
                <li>
                  <Link to="/institutes/ec">English for Communication</Link>
                </li>
                <li>
                  <Link to="/institutes/aec">
                    Architecture, Engineering and Constrution
                  </Link>
                </li>
                <li>
                  <Link to="/institutes/law">Law</Link>
                </li>
              </ul>
            </details>
          </li>
          {/* Admission */}
          <li>
            <details>
              <summary onClick={handleToggleNavigation}>Admission</summary>
              <ul className="p-2 w-52">
                <li>
                  <Link to="/scholarship">Scholarships</Link>
                </li>
                <li>
                  <Link to="/admission">Admission</Link>
                </li>
              </ul>
            </details>
          </li>
          {/* New and event */}
          <li>
            <details>
              <summary onClick={handleToggleNavigation}>News & Events</summary>
              <ul className="p-2 w-52">
                <li>
                  <Link to="/activity#featuredEvent">Featured Events</Link>
                </li>
                <li>
                  <Link to="/activity#upcomingEvent">Upcoming Events</Link>
                </li>
                <li>
                  <Link to="/activity#postEvent">Post Events Summary</Link>
                </li>
              </ul>
            </details>
          </li>
          {/* Student affairs */}
          <li>
            <details>
              <summary onClick={handleToggleNavigation}>
                Student Affairs
              </summary>
              <ul className="p-2 w-52">
                <li>
                  <Link to="/">Students</Link>
                </li>
                <li>
                  <Link to="/">Affairs</Link>
                </li>
              </ul>
            </details>
          </li>
          {/* International program */}
          <li onClick={handleToggleNavigation}>
            <Link to="/international-program">International Program</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
