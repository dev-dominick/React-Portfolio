import React from 'react'
import "./projects.css";
import Dailymealplanner from "./dailymealplanner";
import Workdayplanner from './workdayplanner';
import Passwordgenerator from './Passwordgenerator';
import Codequiz from './codequiz';


export default function Projects() {
  return (
    //  <div>Projects</div>
    <div>
      <section class="section-area" id="projects">
        <div class="div-container">
          <Dailymealplanner/>
          {/* <a
            href="https://dev-dominick.github.io/daily-meal-planner/"
            class="box-item refactor"
            id="project-1"
          >
            <div className="project-name-text">
              <h3>Daily Meal Planner </h3>
              <span>HTML/CSS/JS</span>
            </div>
          </a> */}
          <Workdayplanner/>
          {/* <a
            href="https://dev-dominick.github.io/work-day-planner/"
            class="box-item led"
            id="project-2"
          >
            <div className="project-name-text">
              <h2>Work Day Planner</h2>

              <span>HTML/CSS/JS</span>
            </div>
          </a> */}
          <Passwordgenerator/>
          {/* <a
            href="https://dev-dominick.github.io/password-generator/"
            class="box-item calc"
            id="project-3"
          >
            <div className="project-name-text">
              <h3>Password Generator</h3>
              <span>HTML/CSS/JS</span>
            </div>
          </a> */}
          <Codequiz/>
          {/* <a
            href="https://dev-dominick.github.io/code-quiz/"
            class="box-item puzzles"
            id="project-4"
          >
            <div className="project-name-text">
              <h3>Code Quiz</h3>
              <span>HTLM/CSS/JS</span>
            </div>
          </a> */}

          <a
            href="https://dev-dominick.github.io/horiseon-accessibility-refactor/"
            class="box-item buddy"
            id="project-5"
          >
            <div className="project-name-text">
              <h3>Horiseon Refactor</h3>
              <span>HTML/CSS</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
