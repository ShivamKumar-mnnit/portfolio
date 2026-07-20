import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

// import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>1306shivam@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/shivamkumar6188?igshid=ZmZhODViOGI=">
          <Insta color="white" size={"3rem"} />
          </a>
          {/* <a href="https://www.facebook.com/shivam.kumarraj.3760">  
          <Facebook color="white" size={"3rem"} />
          </a> */}
          <a href="https://www.linkedin.com/in/kumar-shivam2028/">
          <LinkedIn color="white"  size={"3rem"}/>
          </a>
          <a href="https://github.com/Shivamkumar-mnnit">
          <Gitub color="white" size={"3rem"} />
          </a>

          {/* <a href="https://mickeycode.blogspot.com/">
          <img src={blog} alt="#" height={"60rem"}/>
          </a> */}

        </div> 
      </div>
    </div>
  );
};

export default Footer;
