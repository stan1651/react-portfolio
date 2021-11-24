import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import "./index.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import SkillsSection from './pages/SkillsSection';


function App() {
  return (
    <Router>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/skills" component={SkillsSection} />
      
    </Router>

  );
}

export default App;
