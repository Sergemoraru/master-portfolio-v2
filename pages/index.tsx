import Link from 'next/link';
import NavBar from '@/components/navbar';
import TypeWriterText from '@/components/typeWriterText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AboutMe from '@/components/aboutMe';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import MySkills from '@/components/mySkills';

export default function Home() {
  return (
    <div id='main-container'>
        <div>
          <NavBar />
        </div>
          <div className='flex flex-row justify-center items-center relative top-5'>
            <div className='flex justify-center items-center relative mt-20 pt-11 top-20'>
              <div className='flex flex-row justify-center items-center relative top-16' style={{ height: '100px' }}>
                <TypeWriterText />
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center top-52 pt-56 p-10 mb-14 static'>
              <Link href='https://github.com' className='flex flex-row justify-center items-center p-16 top-24 relative text-slate-600 hover:text-sky-500'>
                  <FontAwesomeIcon icon={faGithub} size='2xl' />
              </Link>
              <Link href='https://twitter.com' className='flex flex-row justify-center items-center p-16 top-24 relative text-slate-600 hover:text-sky-500'>
                  <FontAwesomeIcon icon={faTwitter} size='2xl' />
              </Link>
              <Link href='https://linkedin.com' className='flex flex-row justify-center items-center p-16 top-24 relative text-slate-600 hover:text-sky-500'>
                  <FontAwesomeIcon icon={faLinkedin} size='2xl' />
              </Link>
              <Link href='https://discord.com' className='flex flex-row justify-center items-center p-16 top-24 relative text-slate-600 hover:text-sky-500'>
                  <FontAwesomeIcon icon={faDiscord} size='2xl' />
              </Link>
        </div>
      <div className='flex flex-col justify-center items-center relative top-56' id=''>
          <AboutMe />
        </div>
            <div>
              <MySkills />
            </div>
            <div>
              <Projects />
            </div>
            <div>
              <Contact />
            </div>
            <div>
              <Footer />
            </div>
    </div>
  );
}
