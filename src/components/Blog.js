import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import sanityClient from "../client.js";
import Navbar from "../components/Navbar";

export default function Blog() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-dark-blue min-h-screen p-5">
        <h1 className="text-xl md:text-3xl flex justify-center py-8 whitespace-nowrap text-white">
          Blog posts
        </h1>
        <div className="  ">
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <NavLink
                  to={"/post/" + post.slug.current}
                  key={post.slug.current}
                >
                  <div className="  m-5 flex flex-col justify-center items-center p-2  rounded  bg-dark-brown text-white  key={index}">
                    {/* <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.asset.url}
                      className="w-full h-full rounded-r object-cover absolute"
                    /> */}
                    <h3>{post.title}</h3>
                    <p>date</p>
                  </div>
                </NavLink>
              </article>
            ))}
        </div>
      </section>
    </>
  );
}
