import React, { useEffect, useState } from 'react';
import sanityClient from "../client.js";
import Navbar from "../components/Navbar";



export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="min-h-screen bg-green-900">
            <Navbar />
            <section className="container my-16 mx-auto py-8">
                <h2 className="text-xl flex justify-start text-blue-100">My Projects </h2>
                <section className="grid md:grid-cols-2 gap-8 mt-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded shadow-xl bg-white p-8">
                        <h3 className="text-gray-600 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                           >
                               {project.title}
                           </a>
                        </h3>
                        <div className="text-gray-500 space-y-3 md:space-x-3">
                                <span className="inline-block">
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span className="inline-block">
                                    <strong className="font-bold">Company</strong>:{" "}
                                    {project.place}
                                </span>
                                <span className="inline-block">
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                                <a 
                                    href={project.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="text-red-500 font-bold hover:underline hover:text-red-400">
                                    View the project{" "}
                                    <span role="img" aria-label="right pointer">👉</span>
                                </a>
                                
                            </div>
                    </article>
                ))}
                </section>
            </section>
        </main>
    )
}