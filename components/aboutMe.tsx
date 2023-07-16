import React from "react";



const AboutMe = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div >
                <p className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10">About Me</p>
            </div>
            <div>
                <p className="">
                    Hello, my name is <span className="text-sky-500">Serge </span> 
                    and I am a <span className="text-sky-500">software engineer. </span> 
                    I am currently taking classes on <span className="text-sky-500">Front End Masters and Harvard CS50 </span> 
                    studying <span className="text-sky-500">Computer Science and Front End Development</span>. 
                    I am passionate about <span className="text-sky-500">web development</span> and <span className="text-sky-500">back-end development</span>.
                     I am currently working on <span className="text-sky-500">personal projects.</span>
                </p>
            </div>
        </div>
    )
}


export default AboutMe