import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        </div>
        <table class="table table-striped">
            <TableHeader/>
        </table>
    </Router>
    
  );
}

export default App;
