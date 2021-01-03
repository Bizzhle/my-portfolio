import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import sanityClient from "../client.js"



export default function Blog() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"] {
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
        
    }, [])

    return (
       
        <main className="bg-white min-h-screen">
            <div className="bg-blue-800">
              <div className="logo">
                <NavLink to="/" exact 
                    className="inline-flex px-3 ml-4 my-4 rounded text-white  text-3xl font-bold">
                    Paul
                </NavLink>
              </div>
          </div>
            <section className="container mx-auto p-16">
                <h1 className="text-3xl md:text-5xl flex justify-center p-2">Blog Posts Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Blog</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                        <article>
                            <NavLink to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span className="block h-64 relative rounded shadow bg-white key={index}">
                                    <img 
                                    src={post.mainImage.asset.url} 
                                    alt={post.mainImage.asset.url}
                                    className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text.lg font-blog px-3 py-4 bg-blue-500 text-white bg-opacity-75 rounded hover:bg-blue-800">{post.title}</h3>
                                    </span>
                                </span>
                            </NavLink>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}