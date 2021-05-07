import React from "react";
import Navbar from "./components/Navbar";
import Directory from "./pages/Directory";
import './App.css';

function App() {
  return (
    
      <div className = "App">
        <Navbar />
        <div className = "content">
            <Directory/>
        </div>
        
  
        </div>
        
    
  );
}

export default App;
