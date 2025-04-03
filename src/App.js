import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Adding animation class after component mount
    const textElement = document.getElementById('animated-text');
    if (textElement) {
      setTimeout(() => {
        textElement.classList.add('text-animation');
      }, 500);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Jenkins logo SVG */}
        <div className="logo-container">
          <svg 
            className="jenkins-logo" 
            viewBox="0 0 226 312" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M113,2 C66.7,2 29.3,38.3 29.3,83.3 C29.3,96.3 32.7,108.5 39.2,119.1 C32.6,131.7 29.3,145.6 29.3,160 C29.3,205 66.7,241.3 113,241.3 C159.3,241.3 196.7,205 196.7,160 C196.7,145.6 193.4,131.7 186.8,119.1 C193.3,108.5 196.7,96.3 196.7,83.3 C196.7,38.3 159.3,2 113,2 Z" fill="#335061"/>
            <path d="M111.6,107.5 C146.4,107.5 174.6,95.1 174.6,79.6 C174.6,64.1 146.4,51.7 111.6,51.7 C76.8,51.7 48.5,64.1 48.5,79.6 C48.5,95.1 76.8,107.5 111.6,107.5 Z" fill="#D33833"/>
            <path d="M111.6,74 C96.6,74 84.7,68.2 84.7,61.1 C84.7,53.9 96.6,48.1 111.6,48.1 C126.5,48.1 138.4,53.9 138.4,61.1 C138.4,68.2 126.5,74 111.6,74 Z" fill="#EF3D3A"/>
            <path d="M86.3,98.9 C78.1,98.9 71.5,92.3 71.5,84.1 C71.5,75.9 78.1,69.3 86.3,69.3 C94.5,69.3 101.1,75.9 101.1,84.1 C101.1,92.3 94.5,98.9 86.3,98.9 Z" fill="white"/>
            <circle cx="83.3" cy="82.7" r="8.8" fill="#2A2A31"/>
            <path d="M137.1,98.9 C129,98.9 122.4,92.3 122.4,84.1 C122.4,75.9 129,69.3 137.1,69.3 C145.3,69.3 151.9,75.9 151.9,84.1 C151.9,92.3 145.3,98.9 137.1,98.9 Z" fill="white"/>
            <circle cx="134.2" cy="82.7" r="8.8" fill="#2A2A31"/>
            <path d="M113,152.8 C88.8,152.8 69.2,143.2 69.2,131.2 L69.2,171.5 C69.2,183.5 88.8,193.1 113,193.1 C137.2,193.1 156.8,183.5 156.8,171.5 L156.8,131.2 C156.8,143.2 137.2,152.8 113,152.8 Z" fill="#F0D6B7"/>
            <path d="M156.8,131.2 C156.8,143.2 137.2,152.8 113,152.8 C88.8,152.8 69.2,143.2 69.2,131.2 C69.2,119.2 88.8,109.6 113,109.6 C137.2,109.6 156.8,119.2 156.8,131.2 Z" fill="#F0D6B7"/>
            <path d="M103.9,125 C103.9,128.4 108.1,131.2 113.3,131.2 C118.5,131.2 122.7,128.4 122.7,125 C122.7,121.6 118.5,118.8 113.3,118.8 C108.1,118.8 103.9,121.6 103.9,125 Z" fill="#6D6B6D"/>
            <path d="M113,137.7 C100.9,137.7 91.1,135.2 91.1,132.1 L91.1,158.5 C91.1,161.6 100.9,164.1 113,164.1 C125.1,164.1 134.9,161.6 134.9,158.5 L134.9,132.1 C134.9,135.2 125.1,137.7 113,137.7 Z" fill="#D33833"/>
          </svg>
        </div>
        
        <h1 className="main-title gradient-text">This is my final DevOps project</h1>
        
        <div className="animated-container">
          <p id="animated-text" className="thai-text">
            65312894 Pramote Numiam
          </p>
        </div>
        
        <div className="circle-container">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`floating-circle circle-${i+1}`}></div>
          ))}
        </div>
      </header>
      <footer>
        <p className="version-text">Application version: 1.0</p>
      </footer>
    </div>
  );
}

export default App;