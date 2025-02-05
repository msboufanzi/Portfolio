import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>12+ Completed Projects</small>
            </article>
          </div>

          <p>Hi, I’m Mohamed Said Boufanzi, a dedicated software development student specializing in Application Development Engineering at the Faculty of Sciences and Techniques in Tangier (FSTT). I focus on building dynamic and efficient web applications using modern technologies like PHP, Laravel, Python, and React.js. With hands-on experience in database optimization, web development, and object-oriented programming, I thrive on solving technical challenges and delivering high-quality solutions. Let’s collaborate and create innovative tech solutions together!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro