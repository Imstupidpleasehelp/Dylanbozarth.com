import React from "react";
import { Navigation } from "./components/navbar";
import "./App.css";
import  Homepage  from "./pages/homepage";
import { BrowserRouter as  Switch, Route, useLocation, Redirect } from "react-router-dom";
import  Projects  from "./pages/projects";
import { Skills } from "./pages/skills";
import { Testimonials } from "./pages/Testimonials";
import Hireme from "./pages/hireme";
import { AnimatePresence, motion } from "framer-motion";
import { SkylimitFocus } from "./components/skylimitfocus";
import {PowerstrokeFocus} from './components/powerstrokefocus'
import { Weaponsshopfocus } from "./components/weaponsshopfocus";
import { ThiswebsiteFocus } from "./components/thiswebsitefocus";
import { JymrDoodlesFocus } from "./components/jymrdoodlesfocus";
import UseFavicon from './components/useFavicon'
import { Jsquizfocus } from "./components/jsquizfocus";
import { Weatherappfocus } from "./components/weatherappfocus";
 import  {pizzaFocus} from './components/pizzaFocus'
import { Todo } from "./components/todo";
import { SolarsystemFocus } from "./components/solarsystem";
import {BitcoinFocus} from './components/bitcoinfocus'
import { RestFocus } from "./components/restFocus";
import { Dadfocus } from "./components/dadfocus";
import { Fourohfour } from "./pages/404";
import { MyPetFocus } from "./components/mypetfocus";
function App() {
  const location = useLocation();
  
 UseFavicon('./images/Dicon.png')
  return (
   
      <motion.div className="wrapper">
        <Navigation />{" "}
       
        <div className="backgroundclass">
        <div className="stars"></div>
<div className="twinkling"></div>
<div className="clouds"></div>
        </div>
         
          <AnimatePresence exitBeforeEnter={true}> 
            <Switch location={location} key={location.pathname}>
               <Route exact path="/" component={Homepage} /> 
              <Route path="/Projects" component={Projects} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/hireme" component={Hireme} />
              <Route path="/skylimit" component={SkylimitFocus} />
              <Route  path="/dadabase" component={Dadfocus} /> 
              <Route path="/powerstroke" component={PowerstrokeFocus} />
              <Route path="/weaponsshop" component={Weaponsshopfocus} />
              <Route path="/portfolio" component={ThiswebsiteFocus} />
              <Route path="/doodles" component={JymrDoodlesFocus} />
              <Route path="/jsquiz" component={Jsquizfocus} />
              <Route path="/weather" component={Weatherappfocus} />
              <Route path="/pizza" component={pizzaFocus} />
              <Route path="/todo" component={Todo} />
              <Route path="/rest" component={RestFocus} />
              <Route path="/solarsystem" component={SolarsystemFocus} />
              <Route path="/bitcoin" component={BitcoinFocus} />
              <Route path="/mypet" component={MyPetFocus} />
             {/*  <Route component={Fourohfour} /> */}
            </Switch>
          </AnimatePresence>
          
      </motion.div>
    
  );
}

export default App;
