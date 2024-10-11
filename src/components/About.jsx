import React from 'react';
import '../styles/about.css';
import profilePic from '../assests/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 > About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Subhakar Maurya" className="about-img" />
        <p>
        I'm a passionate full stack developer with a background in Computer Science and Engineering from Dr. A P J Abdul Kalam Technical University, Lucknow, Uttar Pradesh. Proficient in building web applications using modern technologies like React, Node.js, and MongoDB. Skilled in DSA, Java, Python, and Machine Learning, I enjoy creating innovative solutions and continuously exploring advancements in technology. </p>
      </div>
    </section>
  );
};

export default About;
