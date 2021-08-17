import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { techdata } from "./TechData";

export default function Resume() {
  console.log(techdata);
  return (
    <div className="bg-green-100 mx-2 mt-16 mb-8 md:max-w-6xl md:mx-auto font-roboto-slab">
      <div className="flex justify-end py-3 px-3 my-3">
        <NavLink to="/" exact>
          <FaHome
            className="mr-4"
            target="_blank"
            fgcolor="#fff"
            style={{ color: "green", height: 25, width: 25 }}
          />
        </NavLink>
        <div>
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
      </div>
      <div className="main md:flex p-6 md:w-full">
        <div className="hidden md:block md:mr-8 md:px-14">
          <div className="sidebar--address mb-4">
            <a
              href="https://github.com/Bizzhle"
              target="_blank"
              rel="noreferrer"
              className="block text-green-800 underline"
            >
              github.com/Bizzhle
            </a>

            <a
              href="mailto:gabrieluche2@gmail.com"
              rel="noreferrer noopener"
              className="text-green-800 underline"
            >
              gabrieluche2@gmail.com
            </a>
            <p>Reinheim, Hessen</p>
          </div>
          <div className="sidebar--tech mb-4">
            <h2 className="text-base font-bold">Core Technologies</h2>
            <ul className="list-disc list-inside">
              {techdata.map((i, k) => {
                return <li key={Math.random()}>{i}</li>;
              })}
            </ul>
          </div>

          <div className="sidebar--others">
            <h2 className="text-base font-bold">Others</h2>
            <ul className="list-disc list-inside inline-block">
              <li>Responsive web design</li>
            </ul>
          </div>
        </div>
        <div className="main ">
          <section className="about mb-2 pb-4 border-bottom-black">
            <h1 className="text-green-700 pb-2 font-bold text-2xl md:text-4xl whitespace-nowrap">
              Egbo Uchenna Paul
            </h1>
            <p className="mb-4 text-xl font-bold">Frontend Developer</p>
            <p className="text-gray-800">
              Frontend web developer with problem solving skills and passion for
              building products for the web. I am very passionate about software
              development and consistently working to improve my skills.
            </p>
          </section>
          <section className="tech mb-2 pb-4 border-bottom-black">
            <div className="sidebar--tech">
              <h2 className="text-green-700 pb-2 text-2xl font-semibold">
                Core Technologies
              </h2>
              <ul className="text-gray-800 grid grid-cols-2 gap-1 ">
                {techdata.map((i, k) => {
                  return <li key={Math.random()}>{i}</li>;
                })}
              </ul>
            </div>
          </section>
          <section className="pb-4 border-bottom-black">
            <h2 className="text-green-800 pb-2 text-2xl font-semibold">
              Projects
            </h2>
            <p className="text-gray-800">Links to my work can be found on</p>
            <NavLink
              to="/Project"
              target="_blank"
              rel="noreferrer"
              className="text-green-900"
            >
              paul-egbo-portolio.netlify.app/project
            </NavLink>
          </section>
          <section className="experience mb-2 pb-4 border-bottom-black leading-7">
            <h2 className="text-green-700 pb-2 text-2xl font-semibold">
              Experience
            </h2>
            <p>03/2021 - CURRENT</p>
            <div>
              <p>
                {" "}
                <span className="font-bold">WEB DEVELOPER</span>, DARMSTADT
                GRAPHICS GROUP
              </p>
              <p>
                <span className="font-bold">Position held:</span> Work-Student –
                Web Development and Performance Improvement{" "}
              </p>
              <ul className="list-inside list-disc mb-4">
                <li>
                  Developing and Adding new pages and functionality to website{" "}
                </li>
                <li>
                  Improvements regarding internal links and page structure
                </li>
                <li>
                  Improve responsiveness, performance and accessibility of
                  website{" "}
                </li>
              </ul>
              <p>
                {" "}
                <span className="font-bold">Technologies:</span> Wordpress, CSS
              </p>
            </div>
          </section>
          <section className="education mb-2">
            <h2 className="text-green-800 pb-2 text-2xl font-semibold">
              Education
            </h2>

            <article className="text-gray-800">
              <span className="date">2008 - 2013</span>
              <p className="font-bold">Caritas University Enugu - BSc</p>
              <p>Computer Science</p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
