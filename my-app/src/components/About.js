import React from "react";

function About(props) {
  return (
    <div
      className={`container my-5 text-${
        props.mode == "dark" ? "light" : "dark"
      }`}
    >
      <h1>About Us</h1>
      <p className="mt-4">
        Welcome to our application! This is a simple React app built to
        demonstrate how to create functional and beautiful user interfaces using
        React and Bootstrap.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our goal is to empower developers to build fast, scalable, and
        user-friendly web applications with ease. This app showcases how to use
        React components, props, and routing effectively.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Dynamic Navigation Bar</li>
        <li>Dark Mode Toggle</li>
        <li>Responsive Design with Bootstrap</li>
        <li>Client-side Routing with React Router</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>React.js</li>
        <li>React Router DOM</li>
        <li>Bootstrap</li>
        <li>JavaScript (ES6+)</li>
      </ul>
      <p className="mt-4">
        Thank you for visiting! We hope you enjoy exploring our app.
      </p>
    </div>
  );
}

export default About;
