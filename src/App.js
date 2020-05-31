import React from "react";
import { Navigation } from "./components/navbar";
import "./App.scss";
import { Homepage } from "./pages/homepage";
import { BrowserRouter as Router, Switch, Route, __RouterContext } from 'react-router-dom';
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";
import {Testimonials} from './pages/Testimonials'
import {Hireme} from './pages/hireme'
import {Stars} from './components/stars'
import {AnimatePresence, motion} from 'framer-motion'



function App() {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren"
  };
  
  return (
    <Router>
      
      <motion.div className="wrapper">
        
        <Navigation /> <div className="backgroundclass"><Stars /></div>
        <div className="sliderdiv">
        <AnimatePresence exitBeforeEnter>
          <Switch >
            <Route exact path="/" component={Homepage} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Testimonials" component={Testimonials} />
            <Route path="/hireme" component={Hireme} />
            
          </Switch>
          </AnimatePresence>
        </div>
      </motion.div>
      
    </Router>
  );
}

export default App;
