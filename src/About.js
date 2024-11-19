import React from "react";
const About = () => {
  return (
    <section id="about me">
      <code id="title">About Me</code>
      <div className="about">
      I am a dedicated student with a keen interest in machine learning, deep learning, artificial intelligence, and web development. I have a solid foundation in programming languages including C, C++, Java, JavaScript, and Python,which I leverage to  create efficient and high-performance applications.  I am experienced in working with databases like MongoDB, ensuring seamless data storage and retrieval.  I have                        hands-on experience in working with open Front end tools to enhance application functionality. Eager to learn and grow, I regularly
      </div>
      <div className="skills">
        <code id="interest">Interests</code>
        <div className="frontend">
          <p className="topic">Front-End</p>
          <div className="one">
            <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="HTML" loading="lazy" />
            <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS" loading="lazy"/>
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JavaScript" loading="lazy" />
          </div>
        </div>
        <div className="database">
          <p className="topic">Database</p> 
          <div className="two">
            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/96/mongodb_plain_wordmark_logo_icon_146423.png" alt="MongoDB" />
          </div>
        </div>
        <div className="programming">
          <p className="topic">Programming Languages</p>
          <div className="three">
            <img src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="C++" />
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt="Python" />
            <img src="https://cdn-icons-png.flaticon.com/128/226/226777.png" alt="Java" />
          </div>
        </div>
      </div>
      <div className="res">
        <button id="resume">
          <a href="/assets/SANJANA_R_Resume.pdf" target="_blank" rel="noopener noreferrer">Get my Resume</a>
        </button>
      </div>
    </section>
  );
};

export default About;
