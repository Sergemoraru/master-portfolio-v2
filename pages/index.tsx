import React from 'react'
import NavBar from '@/components/navbar'
import TypeWriterText from '@/components/typeWriterText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'
import AboutMe from '@/components/aboutMe'



export default function Home() {
  return (
  <div>
    <div>
      <NavBar />
    </div>
      <div className='flex flex-row justify-center items-center relative top-5'>
        <div className='flex justify-center items-center relative mt-20 pt-11 top-20'>
          <div className='flex flex-row justify-center items-center relative top-5' style={{ height: "100px"}}>
          <TypeWriterText />
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center relative top-20 pt-5'>
        <div className='flex flex-row justify-center item-center p-10 top-20 mt-10 relative'>
            <button className='flex flex-row justify-center items-center p-10 top-20 relative text-slate-600 hover:text-sky-500'>
              <FontAwesomeIcon icon={faGithub} size='2xl' />
            </button>
            <button className='flex flex-row justify-center items-center p-10 top-20 relative text-slate-600 hover:text-sky-500'>
              <FontAwesomeIcon icon={faTwitter} size='2xl' />
            </button>
            <button className='flex flex-row justify-center items-center p-10 top-20 relative transition text-slate-600 hover:text-sky-500'>
              <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
            </button>
            <button className='flex flex-row justify-center items-center p-10 top-20 relative transition text-slate-600 hover:text-sky-500'>
              <FontAwesomeIcon icon={faDiscord} size='2xl'/>
            </button>
        </div>
      </div>
        <div className='flex flex-col justify-center items-center relative pb-5 top-20'>
          <div className='flex flex-col justify-center items-center relative top-20'>
            <div className='flex flex-col justify-center items-center relative top-20'>
              <button className='flex flex-col justify-center items-center relative top-20 pb-10 text-slate-600 hover:text-sky-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-11 h-11">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            </div>
        </div>
       <div className='flex flex-col justify-center items-center relative top-20'>
          <div className='flex flex-col justify-center items-center relative mt-20 top-20'>
              <AboutMe />
          </div>
       </div>
  </div>
    )
}