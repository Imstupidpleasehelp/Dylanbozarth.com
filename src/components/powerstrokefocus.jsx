import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Container, Col, Row, Image } from "react-bootstrap";
const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const PowerstrokeFocus = ({ match }) => (
  
    <Container>
      <motion.div className="focuspage" initial="exit" animate="enter" exit="exit">
       
          <motion.div className="back" variants={backVariants}>
            <Link to="/projects" className="whitetext">
              ← Back
            </Link>{" "}
          </motion.div>{" "}
          
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="focusimage"
              variants={imageVariants}
              src="./images/spokanepowerstroke.jpg"
              alt="SkyLimit Fitness"
            />
          </a>
        
        
          <a
            className="linkbutton"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>{" "}
          <a
            className="linkbutton"
            href="https://github.com/Imstupidpleasehelp/spokane-power-stroke"
            target="blank"
            rel="noopener noreferrer"
          >
            View code
          </a>
        
        
          <p className="focustext">
            Spokane Power Stroke. asndkjabskdj asdn asdnlasn d aksdnlasd lansdln
            aslkd asldnlansdlnasld nasldn lasnd lasndlasdlasdla sndlasndas d
          </p>
      </motion.div>
    </Container>
);
