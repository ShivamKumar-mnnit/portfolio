import React, { useContext } from "react";
import { AiOutlineCloudDownload } from 'react-icons/ai'
// import './About.css';
import { themeContext } from "../../Context";
import codechef from '../../img/codechef.png';
import codeforce from '../../img/codeforce.png';
import Resume from '../Services/myresume.pdf';

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <div className="my-6" id="about">

    <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                I'm a Software Engineer at Deutsche Telekom Digital Labs, Gurugram, where I build AI-powered developer tooling and backend systems &mdash; from a RAG-based agent over OpenAI embeddings and MongoDB Vector Search that cut onboarding effort by 50%, to backend API optimizations that took response times from 80ms to 20ms. I graduated in 2025 with a B.Tech in Electrical Engineering from Motilal Nehru National Institute of Technology Allahabad (CPI 8.66/10).
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                Alongside my full-time role, I take on freelance web development projects &mdash; building production websites for small businesses end-to-end, from design to deployment. I'm a Specialist-rated (1400+) competitive programmer on Codeforces and enjoy hackathons; I placed in the Top 25 of 1000+ teams at Hack36 7.0.
                </p>
                <br />
                
<p className="coding" style={{display:"flex"}}>
    <a href="https://www.codechef.com/users/mickeyth59">
    <img src={codechef} alt=""  height={100} width={100}/>
    </a>
    <a href="https://codeforces.com/profile/MICKEYmickey">
    <img src={codeforce} alt=""  height={100} width={100}/>
    </a>
    </p>
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href={Resume} download>Download CV</a>
                </div>
            </div>
        </div>
        </div>
    


  );
};

export default About;
