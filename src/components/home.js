import React from 'react'
import logo from '../logo.svg';
import AdbIcon from "@mui/icons-material/Adb";
import '../App.css';
import ParticlesContainer from './particles.js'

export default function Home() {
  return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <AdbIcon className="App-logo" sx={{ display: { xs: "none", md: "flex" }, mr: 5, width: '1000px' }} />
                <main>
                  <ParticlesContainer/>
                  <h1>Welcome! To my New Awesome Portfolio</h1>
                </main>
            </header>
        </div>
  )
}
