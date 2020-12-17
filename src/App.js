import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-green-100 mx-2 mt-16 mb-8">
        <div className="p-8">
        <div className="hidden">
                <div class="sidebar--address">
                    <ul>
                        <li>gabrieluche2@gmail.com</li>
                    </ul>
                    Reinheim, Hessen
                </div>
                <div class="sidebar--tech">
                    <h2>Core Technologies</h2>
                    <ul>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>React</li>
                    </ul>
                </div>
    
                <div class="sidebar--others">
                    <h2>Others</h2>
                    <ul>
                        Responsive web design
                    </ul>
                </div>
            </div>
            <div className="main">
                <section class="about mb-2 border-bottom-black">
                    <h1 className="text-green-700 pb-2 text-4xl font-bold">Egbo Uchenna Paul</h1>
                    <p className="mb-4">Frontend Developer</p>
                    <p>Software developer with robust 
                        problem solving skills and passion for 
                        building products with enhanced user experience 
                        and maximizing user interface. I’m always ready
                         to adapt according to project specifications 
                         irrespective of stack.
                    </p>                                                        
                </section>
                <section className="tech mb-2 border-bottom-black">
                    <div className="sidebar--tech">
                        <h2 className="text-green-700 pb-2 text-2xl font-semibold">Core Technologies</h2>
                        <ul>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>React</li>
                        </ul>
                    </div>
                </section>
                <section className="experience mb-2 border-bottom-black">
                    <h2 className="text-green-700 pb-2 text-2xl font-semibold">Experience</h2>
                    <article className="mb-2">
                        <div className="flex mb-2">
                            <h3 className="text-green-700">MDN - Learn Web development</h3>
                            <span className="date">aug 2020</span>
                        </div>
                        <p>Completed the mozilla learn development tutorial</p>
                        <li>Learnt structuring the web with HTML, Styling with CSS and clientside scripting with Javascript</li>
                    </article>
                    <article>
                        <div className="flex mb-2">
                            <h3>FreeCodeCamp</h3>
                            <span className="date">july 2020</span>
                        </div>
                        <p>My first introduction to web development</p>
                        <li>Completed tutorials and tasks</li>   
                    </article>
                </section>
                <section className="education mb-2">
                    <h2 className="text-green-700 pb-2 text-2xl font-semibold">Education</h2>
                    <article class="flex">
                        <p>Technishe Universitat Darmstadt - MSc</p>
                        <span class="date">2016 - current</span>
                    </article>
                    <article class="flex">
                        <p>Caritas University Enugu - BSc</p>
                        <span class="date">2008 - 2013</span>
                    </article>
                </section>
            </div>

        </div>
      </div>
     
    </div>
  );
}

export default App;
