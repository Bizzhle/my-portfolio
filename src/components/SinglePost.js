import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
// import Navbar from "../components/Navbar.js";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading</div>;

  return (
    <>
      <div className="flex bg-dark-blue p-1 text-white fixed z-10 w-full ">
        <p className="  px-5">
          <NavLink to="/Blog">Blog </NavLink>{" "}
        </p>{" "}
        <span className="">{"/"} </span>{" "}
        <p className="px-5  text-white">{singlePost.title}</p>
      </div>
      <article className=" bg-blue-100 pt-8 border-solid min-h-screen">
        <header className="flex justify-center items-center">
          <h1 className="my-4 font-bold text-2xl">{singlePost.title}</h1>
          {/* <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12 hidden">
              <div className=" justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full "
                />
              </div>
              <p className="flex items-center pl-2 text-xl"></p>
            </div>
          </div> */}
          {/* <img src={singlePost.mainImage.asset.url} 
                    alt={singlePost.title} 
                    className="w-full  object-cover rounded-t "
                    style={{ height: "400px"}} /> */}
        </header>
        <div className="px-8 lg:px-24 py-12 lg:py-20  max-w-full underline ">
          <BlockContent
            blocks={singlePost.body}
            projectId="9bikalvn"
            dataset="production"
          />
        </div>
      </article>
    </>
  );
}
