import React from 'react'
import './aboutMe.css'
import ParticlesContainer from "./particles.js";

export default function About() {
  return (
    <div>
      <ParticlesContainer />
      <h1 className="header">About Me</h1>
      <p className="aboutMeText">
        Hello World! My name is Dominick Albano and I am a full-stack MERN
        developer.
      </p>
    </div>
  );
}
