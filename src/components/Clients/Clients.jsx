import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PkPhotography from '../../img/clients/pkphotography.png'
import TechnoMachinery from '../../img/clients/technomachineryservice.png'

const clientsData = () => [
  {
    id: 1,
    name: 'PK Photography',
    url: 'https://pkphotography.in/',
    src: PkPhotography,
    tag: 'Photography & Videography Studio',
    desc: "Designed and built a stunning, conversion-focused website for a professional photography studio — with portfolio galleries, service showcases, and an integrated booking flow that turns visitors into paying clients.",
  },
  {
    id: 2,
    name: 'Techno Machinery',
    url: 'https://technomachineryservice.com/',
    src: TechnoMachinery,
    tag: 'Industrial Machinery Supplier',
    desc: "Built a polished, high-trust company website for an industrial machinery supplier — showcasing 100+ product models and a track record of 1000+ machines delivered across 25+ cities, backed by a fast, modern, mobile-ready UI.",
  },
]

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })

  return (
    <div name="clients" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white my-5' id='clients'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Clients</h2>
          <p className='py-6'>Real businesses I've built and shipped websites for as a freelancer</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-8 px-12 sm:px-0'>
          {clientsData().map(({ id, name, url, src, tag, desc }) => (
            <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={name} className='w-full h-48 object-cover object-top duration-200 hover:scale-105' />
              </a>
              <div className='p-4'>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p className='text-sm text-gray-400 mb-2'>{tag}</p>
                <p className='py-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md text-white'>
                    <a href={url} target="_blank" rel="noopener noreferrer">Visit Site</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
