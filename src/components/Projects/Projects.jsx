import React, {useEffect,useContext} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Pendown from "../../img/pendown.png";
import QuizWhizz from "../../img/quizzwhizz.png";
import Utilize from "../../img/utilize.png";
import Event from "../../img/event.png";
import Amazon from "../../img/byteshop.png";
import Auth_sys from "../../img/ss1.png";
import Ichat from "../../img/ichat.png";
import Portfolio from "../../img/port.png";
import './Projects.css'


import one from "../../img/space/1.png";
import two from "../../img/space/2.png";
import three from "../../img/space/3.png";
import four from "../../img/space/4.png";
import five from "../../img/space/5.png";
import six from "../../img/space/6.png";
import Seven from "../../img/space/7.png";
import eight from "../../img/space/8.png";
import nine from "../../img/space/9.png";




import { themeContext } from "../../Context";

const Projects = () => {

    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    
      const projectsData = () => [
        {
          id: 1,
          src: Pendown,
          desc: "Pendow is a unified platform for Academic use and Skill Development made using ReactJS + Bootstrap + Nodejs + MongoDb",
          demo: "https://pendown23.netlify.app/",
          code: "https://github.com/ShivamKumar-mnnit/pendown",
          abstract: "https://drive.google.com/file/d/1OZ5vEFs6V40NBUCV-qR6vmpdkZrvRKxw/view?usp=drive_link",
        },
        {
          id: 2,
          src: QuizWhizz,
          desc: "QuizzWhizz is an online quiz management system is made using MERN Stack along with Advance Google Authentication using G-Auth",
          demo: "https://devfolio.co/projects/quizzwhizz-6e13",
          code: "https://github.com/ShivamKumar-mnnit/QuizWhizz",
          abstract: "https://drive.google.com/file/d/1moPD8sqrK0MLU_nZ4wy2VCyrNNRMIqP6/view?usp=sharing"
        },
        {
          id: 3,
          src: Utilize,
          desc: "Utilize is an nodejs Application that converts json data to User-friendly Tabular format. It also provide advanced filters like sorting, searching and managing queries",
          demo: "https://drive.google.com/file/d/1QZPWIXMWVLjwLTA-Jkk9GLjqk6yhNAep/view?usp=sharing",
          code: "https://github.com/ShivamKumar-mnnit/MyShop",
          abstract: "https://devfolio.co/projects/utilize-database-b442"
        },
        {
          id: 4,
          src: Event,
          desc: "Welcome to EventHub, your all-in-one solution for effortlessly managing events and notices. Built on Django, our platform provides a seamless experience for both organizers and participants alike",
          demo: "https://github.com/Avtech04/robotics",
          code: "https://github.com/Avtech04/robotics",
          abstract: "https://github.com/Avtech04/robotics/blob/main/README.md"
        },
        {
          id: 5,
          src: Amazon,
          desc: "Byte-Shop is an Amazon clone build in React along with Stripe integration for payments gateway and Emailjs for Email services and firebase for database management",
          demo: "https://drive.google.com/file/d/1e4TmQoOCiCs3tKW8PSMbsMFVNgnhrBV9/view?usp=sharing",
          code: "https://github.com/ShivamKumar-mnnit/BETA-BYTE-Techs",
          abstract: "https://drive.google.com/file/d/1MJ3j3cQilienpuPQ1OvUHdiBQj-B1Mma/view?usp=sharing"
        },
        {
          id: 6,
          src: Auth_sys,
          desc: "1)OAuth Google Login 2)Password Reset via OTP. The advanced authentication system utilizes OAuth Google login and OTP-based password reset for enhanced security and user convenience",
          demo: "https://github.com/ShivamKumar-mnnit/AuthSystem",
          code: "https://github.com/ShivamKumar-mnnit/AuthSystem",
          // abstract: "https://github.com/ShivamKumar-mnnit/AuthSystem"
        },
        {
          id: 7,
          src: Ichat,
          desc: "Galactic-iChat is a cutting-edge real-time chat application built with Socket.IO, It offers a fluid and dynamic messaging experience with instant message delivery",
          demo: "https://drive.google.com/file/d/112w2dUdICs93sEWv9SBQuQPPKyDK3t9r/view?usp=sharing",
          code: "https://github.com/ShivamKumar-mnnit/Galactic-ichat.github.io"
        },
        {
          id: 8,
          src: Portfolio,
          desc: "Welcome to my Portfolio, a dynamic portfolio crafted with React! Here, I present a collection of my creative endeavors, showcasing my skills, projects, and achievements in an interactive and engaging manner",
          demo: "https://shivamkumar-mnnit.github.io/portfolio/",
          code: "https://github.com/ShivamKumar-mnnit/portfolio"
        },
      ]
    
    

      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

     

  return (
<>


      
<div name="projects" className='h-auto max-h-screen-lg space' id='projects'>
  <div className="one">
  <div className="two">
  <div className="three">
  <div className="four">
  <div className="five">
  <div className="six">
  <div className="seven">
  <div className="eight">
  <div className="nine">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>

        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0 justify-center'>
        {
            projectsData().map(({ id, src, desc, demo, code,abstract }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc} {abstract? <a href={abstract}>...</a>: <>.</> }</p>
                <div className='flex items-center justify-center px-5'>
                  
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md text-white'>
                    <a href={demo}>Demo</a>
                  </button>

                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md text-white'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }

        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>



    </>
  )
}

export default Projects
