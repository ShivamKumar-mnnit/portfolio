import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const experienceData = () => [
  {
    id: 1,
    role: "Software Engineer",
    company: "Deutsche Telekom Digital Labs, Gurugram",
    period: "July 2025 – Present",
    points: [
      "Engineered a RAG-based AI agent using OpenAI embeddings and MongoDB Vector Search to unify Jira tickets, wiki docs, and workflow diagrams, cutting onboarding effort by 50% and KT provider effort by 90%.",
      "Refactored backend APIs, reducing response time from 80ms to 20ms (75% improvement) through MongoDB query optimization and observability metrics.",
      "Orchestrated data workflows with Apache Airflow, processing 5,000+ daily transactions across MongoDB and PostgreSQL.",
    ],
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "Deutsche Telekom Digital Labs, Gurugram",
    period: "Jan 2025 – June 2025",
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
          {experienceData().map(({ id, role, company, period, points }) => (
            <div data-aos="fade-up" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg p-6'>
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-baseline'>
                <h3 className='text-2xl font-semibold'>{role}</h3>
                <span className='text-gray-400'>{period}</span>
              </div>
              <p className='text-gray-300 mb-4'>{company}</p>
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
