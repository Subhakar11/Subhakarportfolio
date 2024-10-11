import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  const projectData = [
    { title: 'Real-Time Object Detection', description: 'An AI-based solution for assisting visually impaired individuals.', link: 'https://github.com/Subhakar11/object_detection' },
    { title: 'Grow Stocks Web App', description: 'A full-stack web app for stock market insights, featuring a React-based frontend, Node.js/Express.js backend with MongoDB, and an admin dashboard.', link: 'https://github.com/Subhakar11/growstocks_webhosed' },
    { title: 'Full Stack Web Hosted Project', description: 'A full-stack web application designed for seamless user interaction, with user authentication and dynamic content.', link: 'https://github.com/Subhakar11/full-stack-web-hosted-project' },
    { title: 'Python Library', description: 'NumPy and Pandas libraries for numerical computing and data manipulation in Python.', link: 'https://github.com/Subhakar11/python_library' },
    { title: 'Placement Prediction Model', description: 'A machine learning model predicting placement outcomes based on CGPA and IQ scores.', link: 'https://github.com/Subhakar11/placement-prediction-model' },
    { title: 'Fintech Platform', description: 'A JavaScript-based fintech platform for managing financial data and insights.', link: 'https://github.com/Subhakar11/fintech-platform' },
    { title: 'Visualization Dashboard', description: 'An interactive dashboard for data visualization using JavaScript.', link: 'https://github.com/Subhakar11/Visualization_Dashboard' },
    { title: 'HashedBit Assignment', description: 'Full-stack application using the MERN stack for the HashedBit internship.', link: 'https://github.com/Subhakar11/HashedBit_Assignment' },
    { title: 'React API with Material-UI', description: 'A React app integrating APIs and Material-UI for a user-friendly interface.', link: 'https://github.com/Subhakar11/react-api-material-ui' },
    { title: 'DSA Java Solutions', description: 'Data Structures and Algorithms implemented in Java.', link: 'https://github.com/Subhakar11/DSA' },
    { title: 'To-Do List', description: 'A simple to-do list application for task organization and time management.', link: 'https://github.com/Subhakar11/To-do-list' },
    { title: 'Blog with Database', description: 'A dynamic blog website with a robust database for content management.', link: 'https://github.com/Subhakar11/Blog-with-database' },
    { title: 'Keeper Notes', description: 'A note-keeping application for organizing important information.', link: 'https://github.com/Subhakar11/Keeper-Notes' },
    { title: 'Temperature Converter', description: 'A basic temperature conversion tool built with HTML.', link: 'https://github.com/Subhakar11/temperature-converter' },
    { title: 'User Login System', description: 'A private repository implementing a user login system.', link: 'https://github.com/Subhakar11/userlogin' },
    { title: 'Landing Page', description: 'A simple landing page built using HTML.', link: 'https://github.com/Subhakar11/Landingpage' },
    { title: 'Portfolio Website', description: 'A portfolio website built to showcase projects.', link: 'https://github.com/Subhakar11/protfolio' },
    { title: 'Calculator', description: 'A basic calculator built with HTML and JavaScript.', link: 'https://github.com/Subhakar11/calculator' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title"> <b>My Projects</b></h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
