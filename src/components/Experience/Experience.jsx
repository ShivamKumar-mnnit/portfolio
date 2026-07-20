import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const experienceData = () => [
  {
    id: 1,
    role: "Software Engineer",
    points: [
      "Engineered a RAG-based AI agent using OpenAI embeddings and MongoDB Vector Search to unify Jira tickets, wiki docs, and workflow diagrams, cutting onboarding effort by 50% and KT provider effort by 90%.",
      "Refactored backend APIs, reducing response time from 80ms to 20ms (75% improvement) through MongoDB query optimization and observability metrics.",
      "Orchestrated data workflows with Apache Airflow, processing 5,000+ daily transactions across MongoDB and PostgreSQL.",
    ],
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    points: [
      "Built an AI-powered unit test generation agent using Ollama LLMs, raising test accuracy from 42% to 90% and cutting manual testing effort by 80%.",
      "Developed scalable microservices with Java, Spring Boot, and React for the One-Shop Commerce team, reducing API response times by 75% via MongoDB optimization.",
    ],
  },
]

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })

  return (
    <div name="experience" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white my-5' id='experience'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</h2>
          <p className='py-6'>Where I've worked</p>
        </div>

        <div className='flex flex-col gap-8 px-12 sm:px-0'>
          {experienceData().map(({ id, role, points }) => (
            <div data-aos="fade-up" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg p-6'>
              <h3 className='text-2xl font-semibold mb-4'>{role}</h3>
              <ul className='list-disc list-inside space-y-2 font-extralight'>
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
