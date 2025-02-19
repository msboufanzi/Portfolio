import React from 'react';
import IMG1 from '../../assets/techhorizon.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/mazec++.png';
import IMG5 from '../../assets/unilink.png';
import IMG6 from '../../assets/portfolio.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Tech Horizon - Online Magazine Management',
      img: IMG1,
      description:
        'Tech Horizon is a web application designed to manage an online magazine focused on advanced technologies. The application provides a personalized and intuitive user experience, allowing subscribers, contributors, and administrators to actively participate in content dissemination and management.',
      technologies: 'PHP Laravel | html,css,js',
      // link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
      github: 'https://github.com/msboufanzi/tech-Horizon',
    },
    {
      id: 2,
      title: 'C++ Maze Game 🎮',
      img: IMG4,
      description:
        'Welcome to the C++ Maze Game repository! This project showcases the journey of developing a dynamic maze game with exciting features like randomly generated enemies, weapons, and advanced logic for balanced gameplay.',
      technologies: 'c++ | Raylib',
      github: 'https://github.com/AbdoKujo/Star-Wars-Maze',
    },
    {
      id: 3,
      title: 'To-Do App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      // link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/msboufanzi/to-do-liste',
    },
    {
      id: 4,
      title: 'Shelter',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      // link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      // github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'Unilink',
      img: IMG5,
      description:
        'UniLink: A Digital Collaboration Platform Connects UIR students across diverse fields for academic projects. Allows students to showcase skills and find peers with expertise. Provides part-time job opportunities. Enhances learning, practical experience, and employability.',
      technologies: ' Next.js | Tailwind CSS | Node.js |MongoDB',
      link: 'https://unilink-freelance-4fdy.vercel.app/',
      github: 'https://github.com/msboufanzi/Unilink-freelance',
    },
    {
      id: 6,
      title: 'Portfolio',
      img: IMG6,
      description:
        'Simple portfolio that shows my skills n project , with a small presentation of my self , with a picture of me, the blue is the main color in this react project',
      technologies: 'React js | css ',
      link: 'https://msboufanzi.github.io/Portfolio/',
      github: 'https://github.com/msboufanzi/Portfolio/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
