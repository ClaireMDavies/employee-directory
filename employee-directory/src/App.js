import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        </div>
        <table class="table table-striped">
            <TableHeader/>
            <TableBody/>
        </table>
    </Router>
    
  );
}

export default App;
