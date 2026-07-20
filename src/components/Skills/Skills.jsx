import React, { useEffect } from 'react'
import html from '../../img/experience/html.png'
import css from '../../img/experience/css.png'
import cpp from '../../img/experience/cpp.png'
import javascript from '../../img/experience/javascript.png'
import node from '../../img/experience/node.png'
import bootstrap from '../../img/experience/bootstrap.png'
import firebase from '../../img/experience/firebase.png'
import react from '../../img/experience/react.png'
import tailwind from '../../img/experience/tailwind.png'
import mongo from '../../img/experience/mongoicon.png'
import mui from '../../img/experience/mui.png'
import { SiSpringboot, SiApacheairflow, SiGooglecloud, SiMicrosoftazure, SiOpenjdk, SiGithub } from 'react-icons/si'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = () => [
        {
            id: 1,
            scr: cpp,
            title: 'C++',
            style: 'shadow-blue-400'
        },
        {
            id: 2,
            scr: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
       
        {
            id: 3,
            scr: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            scr: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            scr: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-800'
        },
        {
            id: 5,
            scr: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            scr: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 7,
            scr: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            scr: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-800'
        },
      
        {
            id: 10,
            scr: mongo,
            title: 'MongoDb',
            style: 'shadow-green-400'
        },
        {
            id: 11,
            scr: mui,
            title: 'Material UI',
            style: 'shadow-blue-400'
        },
        {
            id: 12,
            Icon: SiOpenjdk,
            title: 'Java',
            style: 'shadow-red-500'
        },
        {
            id: 13,
            Icon: SiSpringboot,
            title: 'Spring Boot',
            style: 'shadow-green-500'
        },
        {
            id: 14,
            Icon: SiGithub,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 15,
            Icon: SiGooglecloud,
            title: 'Google Cloud',
            style: 'shadow-blue-400'
        },
        {
            id: 16,
            Icon: SiMicrosoftazure,
            title: 'Azure',
            style: 'shadow-sky-500'
        },
        {
            id: 17,
            Icon: SiApacheairflow,
            title: 'Airflow',
            style: 'shadow-teal-500'
        },
    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full my-5' id='skills'>
            <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                    <p className='py-6'>This are the technologies I've worked with</p>
                </div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, Icon, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                {Icon ? <Icon className='w-20 h-20 mx-auto' /> : <img src={scr} alt="" className='w-20 mx-auto' />}
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills