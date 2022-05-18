import React from 'react'
import "./projects.css";

export default function Projects() {
  return (
    //  <div>Projects</div>
    <div>
    
      <section class="section-area" id="projects">
        <div class="div-container">

          <a href="https://dev-dominick.github.io/daily-meal-planner/" class="box-item refactor"
            id="project-1">

            <div>
              <h3>Daily Meal Planner</h3>
              <span>HTML/CSS/JS</span>

            </div>
          </a>

          <a href="https://dev-dominick.github.io/work-day-planner/" class="box-item led" id="project-2">
            <div>
              <h3>Work Day Planner</h3>
              <span>HTML/CSS/JS</span>
            </div>
          </a>

          <a href="https://dev-dominick.github.io/password-generator/" class="box-item calc" id="project-3">
            <div>
              <h3>Password Generator</h3>
              <span>HTML/CSS/JS</span>
            </div>
          </a>

          <a href="https://dev-dominick.github.io/code-quiz/" class="box-item puzzles" id="project-4">
            <div>
              <h3>Code Quiz</h3>
              <span>HTLM/CSS/JS</span>
            </div>
          </a>

          <a href="https://dev-dominick.github.io/horiseon-accessibility-refactor/" class="box-item buddy" id="project-5">
            <div>
              <h3>Horiseon Refactor</h3>
              <span>HTML/CSS</span>
            </div>
          </a>
        </div>
      </section>
    </div>

  )
}
