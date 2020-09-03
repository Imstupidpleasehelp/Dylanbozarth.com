import React from "react";
import { motion } from "framer-motion";

import {  Col, Row, Card } from "react-bootstrap";
const changepage = {
  in: {
    opacity: 1,
    
  },
  out: {
    opacity: 0,
    
  },
};
const pagetransition = {
  duration: 1.5,
};
export const Skills = () => (
  <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
    className="whitetext"
  >
    <div className="container">
      <p className="iworkwith">I work with the following technologies</p>
      <p className="iworkwith2">Hover to learn more <br /> Anything that I don't already know, I am always able to learn.</p>
      <div className="row">
        <div className="col-sm ">
          <aside className="profile-card asidehtml">
            <header></header>

            <div className="profile-bio">
              <p>HTML</p>
              <p>
                Hypertext Markup Language (HTML) is the standard markup language
                for documents designed to be displayed in a web browser. It can
                be assisted by technologies such as Cascading Style Sheets (CSS)
                and scripting languages such as JavaScript.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidecss">
            <header></header>

            <div className="profile-bio">
              <p>CSS</p>
              <p>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language like HTML. CSS is a cornerstone technology of the World
                Wide Web, alongside HTML and JavaScript.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidejs">
            <header></header>

            <div className="profile-bio">
              <p>Javascript</p>
              <p>
                Alongside HTML and CSS, JavaScript is one of the core
                technologies of the World Wide Web. JavaScript enables
                interactive web pages and is an essential part of web
                applications. The vast majority of websites use it for
                client-side page behavior, and all major web browsers have a
                dedicated JavaScript engine to execute it.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidereact">
            <header></header>

            <div className="profile-bio">
              <p>React</p>
              <p>
                React (also known as React.js or ReactJS) is an open-source
                JavaScript library for building user interfaces. It is
                maintained by Facebook and a community of individual developers
                and companies.
              </p>
            </div>
          </aside>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-sm ">
          <aside className="profile-card asidereactnative">
            <header></header>

            <div className="profile-bio">
              <p>React-native</p>
              <p>
                React Native is an open-source mobile application framework
                created by Facebook. It is used to develop applications for
                Android, iOS, Web and UWP by enabling developers to use React
                along with native platform capabilities.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidenodejs">
            <header></header>

            <div className="profile-bio">
              <p>Node.Js</p>
              <p>
                Node.js is an open-source, cross-platform, JavaScript runtime
                environment that executes JavaScript code outside a web browser.
                Node.js lets developers use JavaScript to write command line
                tools and for server-side scripting—running scripts server-side
                to produce dynamic web page content before the page is sent to
                the user's web browser.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidescss">
            <header></header>

            <div className="profile-bio">
              <p>SCSS</p>
              <p>
                Sass (short for syntactically awesome style sheets) is a style
                sheet language. Used for advanced styling of web applications.{" "}
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asideredux">
            <header></header>

            <div className="profile-bio">
              <p>Redux</p>
              <p>
                Redux is an open-source JavaScript library for managing
                application state. It is most commonly used with libraries such
                as React or Angular for building user interfaces. Similar to
                (and inspired by) Facebook's Flux architecture
              </p>
            </div>
          </aside>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-sm ">
          <aside className="profile-card asidessql">
            <header></header>

            <div className="profile-bio">
              <p>SQL</p>
              <p>
                Structured Query Language is a domain-specific
                language used in programming and designed for managing data held
                in a relational database management system
              </p>
            </div>
          </aside>{" "}
        </div>
      </div>
      <br />
    
      
        
      
     
    </div>
    <p className="projectpagetitle">Evidence Link</p>
    <main className="skillrow">
    <div className="item">
  <img className="skillimage" src="https://unsplash.it/640/426" alt="" />
  <div className="item-content">
    <p>Card Title</p>
    <p><i>Card Subtitle</i></p>
    
   </div>
</div>
<div className="item">
  <img className="skillimage" src="https://unsplash.it/640/426" alt="" />
  <div className="item-content">
    <p>Card Title</p>
    <p><i>Card Subtitle</i></p>
    
   </div>
</div>
<div className="item">
  <img className="skillimage" src="https://unsplash.it/640/426" alt="" />
  <div className="item-content">
    <p>Card Title</p>
    <p><i>Card Subtitle</i></p>
    
   </div>
</div></main>
  </motion.div>
);

