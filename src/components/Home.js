import React from "react";

// import paul from "../paul.jpg";
import paul1 from "../images/paul1.webp";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SocialIcon } from "react-social-icons";

export default function Home(props) {
  return (
    <main className="bg-white">
      <Navbar />
      <section className="relative flex justify-center items-center min-h-screen bg-gray-400 bg-home-bg bg-no-repeat bg-cover border-b-8 border-blue-300">
        <div className="p-6 mx-6 rounded bg-green-700">
          <h2 className="text-2xl text-yellow-500">Paul Egbo </h2>
          <p className="text-4xl text-green-400 font-bold">
            Frontend Developer
          </p>
          <p className="text-2xl text-green-400 serif">
            I build products for the web
          </p>

          <button
            className="px-4 py-2 mt-4 border-solid border-2 border-yellow-500
                         bg-green-700 hover:bg-yellow-500 text-yellow-500 hover:text-green-700 cursor-pointer font-semibold rounded-md"
          >
            <NavLink to="/Resume">view resume</NavLink>
          </button>
        </div>
      </section>
      <section className="about-me bg-green-50 max-w-6xl mx-auto">
        <div className="px-8 py-8 md:flex md:justify-around">
          <article className="md:mr-10">
            <h2 className="my-4 py-2 text-green-800 text-3xl font-semibold">
              ABOUT ME
            </h2>
            <div className="description text-green-800">
              <ul className="list-inside list-disc ">
                <li>I live in Reinheim Germany.</li>
                <li>Masters Student studying Distriibuted software system.</li>
                <li>
                  I am an avid sports fan, I follow football, F1, Tennis and the
                  NBA religiously
                </li>
                <li>Love cooking, eating, not so much.</li>
                <li>Sofware is my passion</li>
                <li>
                  I love to build stuff and i believe i am getting good at it
                  every day.
                </li>
              </ul>
            </div>
          </article>
          <article>
            <div
              className="my-0 mx-auto text-center rounded-lg shadow-2xl"
              style={{ width: 300 }}
            >
              <img
                src={paul1}
                alt="paul in a restaurant"
                className="object-cover w-full"
              />
              <div className="">
                <h4>
                  <b>Paul Egbo</b>
                </h4>
                <p>Web developer</p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="py-3 bg-green-900 border-b-8 border-blue-300">
        <div className="px-1 my-20 md:flex md:max-w-5xl md:mx-auto">
          <article className="py-5 flex flex-1 shadow center bg-green-700 mb-3 md:mr-1 md:justify-center md:items-center">
            <div className="py-7 px-4">
              <p className="text-white text-3xl font-bold">
                I build and <br />
                work on
              </p>
              <p className="text-white">web applications</p>

              <button
                className="px-4 py-2 mt-4 border-solid border border-yellow-500
                         bg-green-700 hover:bg-yellow-500 text-yellow-500 hover:text-green-700 font-semibold rounded"
              >
                <NavLink to="/Project">SEE MY WORK</NavLink>
              </button>
            </div>
          </article>
          <article className="flex flex-1 shadow center bg-green-700 mb-3 md:justify-center md:items-center">
            <div className="py-7 px-4">
              <p className="text-white text-3xl font-bold">
                I also <br />
                write
              </p>
              <p className="text-white">about experience</p>
              <button
                className="px-4 py-2 mt-4 border-solid border border-yellow-500
                         bg-green-700 hover:bg-yellow-500 text-yellow-500 hover:text-green-700 font-semibold rounded"
              >
                <NavLink to="/Blog">BROWSE MY BLOG</NavLink>
              </button>
            </div>
          </article>
        </div>
      </section>
      <footer className="footer grid justify-center">
        <div className="mx-auto m-4">
          <SocialIcon
            url="https://twitter.com/bizzhle"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            url="https://github.com/bizzhle"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/paul-egbo-6a658a166/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </footer>
    </main>
  );
}
