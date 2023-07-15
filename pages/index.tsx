import React from 'react'
import NavBar from '@/components/navbar'
import TypeWriterText from '@/components/typeWriterText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'



export default function Home() {
  return (
  <div>
    <div>
      <NavBar />
    </div>
      <div className='flex flex-row justify-center items-center'>
        <div className='flex justify-center items-center relative mt-20 pt-11 top-10'>
          <div className='flex flex-row justify-center items-center relative top-5' style={{ height: "100px"}}>
          <TypeWriterText />
          </div>
        </div>
      </div>
        <div className='flex flex-row justify-center item-center p-10 top-20 mt-10 relative'>
            <button className='flex flex-row justify-center items-center p-10 top-20 relative text-slate-600 hover:text-slate-300'>
              <FontAwesomeIcon className='' icon={faGithub} size='2xl' />
            </button>
            <button className='flex flex-row justify-center items-center p-10 top-20 relative text-slate-600 hover:text-slate-300'>
              <FontAwesomeIcon icon={faTwitter} size='2xl' />
            </button>
            <button className='flex flex-row justify-center items-center p-10 top-20 relative text-slate-600 hover:text-slate-300'>
              <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
            </button>
            <button className='flex flex-row justify-center items-center p-10 top-20 relative text-slate-600 hover:text-slate-300'>
              <FontAwesomeIcon icon={faDiscord} size='2xl'/>
            </button>
        </div>
        <div>
          <div className='flex flex-row justify-center items-center relative top-20'>
            <div className='flex flex-row justify-center items-center relative top-20'>
              <button className='flex flex-row justify-center items-center relative top-20 text-slate-600 hover:text-slate-300'>
                <FontAwesomeIcon icon={faCircleDown} size="2xl" />
              </button>
            </div>
            </div>
        </div>
  </div>
    )
}