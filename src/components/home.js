import React from 'react'
import logo from '../logo.svg';
import AdbIcon from "@mui/icons-material/Adb";
import '../App.css';

export default function Home() {
  return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <AdbIcon className="App-logo" sx={{ display: { xs: "none", md: "flex" }, mr: 5, width: '1000px' }} />
            </header>
        </div>
  )
}
