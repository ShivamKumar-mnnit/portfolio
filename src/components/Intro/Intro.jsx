import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Shivam kumar</span>


          <span>
          I'm a Software Engineer at Deutsche Telekom Digital Labs, building AI-powered tools and scalable backend systems with React, Node.js, Java/Spring Boot & MongoDB. I also take on freelance web development projects, helping businesses design, build, and ship production-ready websites.
          </span>


        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Collaborate</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/ShivamKumar-mnnit">
          <img src={Github} alt="#" />  
          </a>
          <a href="https://www.linkedin.com/in/kumar-shivam2028/">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://instagram.com/shivamkumar6188?igshid=ZmZhODViOGI=">
          <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right side image */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* there is a change in floating div in darkmode*/}
          <FloatingDiv img={thumbup} text1="Programmer"/>
        </motion.div>

        <div className="blury" style={{ background: "rgb(222 168 255)" }}></div>
        <div className="blury" style={{ background: "rgb(222 168 255)" }}></div>
        <div
          className="blury"
          style={{
            background: "rgb(118 233 255)",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
       
      </div>

      
    </div>
  );
};

export default Intro;
