import React from 'react';
import IMG1 from '../../assets/img1.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Tech Horizon - Online Magazine Management',
      img: IMG1,
      description:
        'Tech Horizon is a web application designed to manage an online magazine focused on advanced technologies. The application provides a personalized and intuitive user experience, allowing subscribers, contributors, and administrators to actively participate in content dissemination and management. The platform is built using modern web technologies and follows the MVC architecture to ensure a clean and maintainable codebase.',
      technologies: 'PHP Laravel | html,css,js',
      // link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
      github: 'https://github.com/msboufanzi/tech-Horizon',
    },
    {
      id: 2,
      title: 'FakeStore',
      img: IMG4,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Redux',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
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
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
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
