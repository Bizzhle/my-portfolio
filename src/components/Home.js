import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SocialIcon } from "react-social-icons";

export default function Home(props) {
  return (
    <div className=" ">
      <Navbar />
      <section className="flex flex-col  justify-center items-center min-h-screen bg-gradient-to-r from-blue-900  to-red-700  bg-no-repeat bg-cover bg-fixed border-b-8 border-blue-300">
        <div className="max-w-2xl w-4/5 mx-auto">
          <div className="bg-dark-blue rounded-t-md flex justify-center items-center text-white">
            <p>profile</p>
          </div>
          <div className=" rounded-b-md leading-relaxed p-5 bg-black opacity-75 text-white font-Noto-sans ">
            <p> Full Name:</p>
            <p>{">> "} Paul Uchenna Egbo</p>

            <p>Location:</p>
            <p>{">> "}Reinheim, Hessen</p>

            <p>Skills:</p>
            <p> {">> "} ['SASS, React, Node, Express, Git, Docker']</p>

            <p>Links:</p>
            <p>
              {">> "}
              <a
                href="http://github.com/bizzhle"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/bizzhle
              </a>
            </p>

            <p>
              {">> "}
              <a
                href="http://linkedin.com/in/paul-egbo-6a658a166/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/paul-egbo
              </a>
            </p>
            <p>
              {">> "}

              <a href="mailto:gabrieluche2@gmail.com">gabrieluche2@gmail.com</a>
            </p>
            <p>
              {" "}
              <NavLink to="/Resume" className="">
                {">> "}Resume
              </NavLink>
            </p>

            <NavLink to="/Project" className="">
              {">> "}Personal projects
            </NavLink>
          </div>
        </div>
      </section>

      <footer className="footer grid justify-center">
        <div className="mx-auto m-4">
          {/* <SocialIcon
            url="https://twitter.com/bizzhle"
            className="mr-4"
            target="_blank"
            fgcolor="#fff"
            style={{ height: 25, width: 25 }}
          /> */}
          <SocialIcon
            url="https://github.com/bizzhle"
            className="mr-4"
            target="_blank"
            fgcolor="#fff"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/paul-egbo-6a658a166/"
            className="mr-4"
            target="_blank"
            fgcolor="#fff"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </footer>
    </div>
  );
}
