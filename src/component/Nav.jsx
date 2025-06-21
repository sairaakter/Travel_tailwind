import { useEffect, useRef, useState } from "react";
import flight from "../assets/flight.png";
import golobe from "../assets/golobe.png";

import stay from "../assets/stay.png";
import navsty from "../style/Nav.module.css";
export default function Nav() {
  // navbar
  const [menuOpen, setMenuOpen] = useState(false); // toggle state
  // const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        menuRef.current.style.height = menuRef.current.scrollHeight + "px";
      } else {
        menuRef.current.style.height = "0px";
      }
    }
  }, [menuOpen]);
  // navbar
  return (
    <div className={navsty.header}>
      <div className="container mx-auto cus_container px-3">
        {/* <!-- navbar --> */}
        <div className={navsty.h_wrapper}>
          {/* this is main navbar */}
          <nav
            className={`${navsty.navbar} flex items-center justify-between flex-wrap`}
          >
            {/* <!-- Logo --> */}
            {/* <!-- this in d-none for lg and above --> */}
            <div className={navsty.mainlogo}>
              <a className="" href="#">
                <img src={golobe} alt="golobe" />
              </a>
            </div>
            {/* <!-- logo --> */}
            <div className={`${navsty.h_logos} ${navsty.md_logos}`}>
              <a className={navsty.flight_btn} href="./fightflow.html">
                <img src={flight} alt="flight" />
              </a>
              <a className={navsty.flight_btn} href="#">
                <img src={stay} alt="flight" />
              </a>
            </div>
            {/* <!-- Toggler --> */}
            <button
              className={`${navsty.nav_togle} block lg:hidden`}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <a href="#">
                <svg
                  className={navsty.custom_toggler_icon}
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9998 1C24.2829 1 30.9995 7.71503 30.9995 15.9998C30.9995 24.2829 24.2829 30.9995 15.9998 30.9995C7.71503 30.9995 1 24.2829 1 15.9998C1 7.71665 7.71665 1 15.9998 1Z"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.3875 16.0207H22.4021"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.8865 16.0207H15.9011"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.38553 16.0207H9.40013"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </button>

            {/* <!-- Nav Items --> */}
            <div
              id="navMenu"
              ref={menuRef}
              style={{ height: "0px" }}
              className={`${navsty.nav} w-full transition-all duration-500 ease-in-out overflow-hidden lg:!h-auto lg:overflow-visible lg:flex lg:items-center lg:w-auto lg:flex-grow`}
            >
              <ul
                className={`flex flex-col lg:flex-row lg:space-x-4 mt-2 lg:mt-0 lg:m-auto ${navsty.first_li}`}
              >
                <li className="">
                  <a className="" href="#">
                    <img src={golobe} alt="golobe" />
                  </a>
                </li>
              </ul>
              <ul
                className={`flex flex-col lg:flex-row lg:space-x-4 mt-2 lg:mt-0 lg:m-auto ${navsty.secondt_li}`}
              >
                <li className={navsty.h_logos}>
                  <a className={navsty.flight_btn} href="#">
                    <img src={flight} alt="flight" />
                  </a>
                </li>
                <li className={navsty.h_logos}>
                  <a className={navsty.flight_btn} href="#">
                    <img src={stay} alt="flight" />
                  </a>
                </li>
              </ul>
              {/* <!-- Contact Button --> */}

              <div className={`${navsty.h_buttons} ${navsty.comon_allbtns}`}>
                <button type="button" className={navsty.login}>
                  Login
                </button>
                <button type="button" className={navsty.signup}>
                  Sign up
                </button>
              </div>
            </div>
          </nav>
          {/* this is main navbar */}
          <div className={navsty.h_banner}>
            <h1>Helping Others</h1>
            <h2>Live & Travel</h2>
            <p>Special offers to suit your plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
