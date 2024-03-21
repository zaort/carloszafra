import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'resetario',
      description: 'HTML, CSS, API',
      link: "https://jerrychowmx.github.io/Resetario/",
      repo: "https://github.com/JerryChowMX/Resetario"
    },
    {
      name: 'toDone',
      description: 'MVC, Handlebars, SQL',
      link: "https://todonevf-6aecf37fb01a.herokuapp.com/",
      repo: "https://github.com/zaort/todone"
    },
    {
      name: 'capiii',
      description: 'MERN Stack, Tailwind, Graphql',
      link: "https://capiii.onrender.com/",
      repo: "https://github.com/zaort/capiii"
    },
    // {
    //   name: 'ledWall',
    //   description: 'Node/IoT',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
    // {
    //   name: 'calculator',
    //   description: 'React/JavaScript/CSS',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
