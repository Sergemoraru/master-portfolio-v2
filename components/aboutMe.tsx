/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";



const AboutMe = () => {
    return (
        <div className="flex flex-col justify-center items-center pb-14 bg-slate-200">
            <div >
                <p className="flex text-5xl font-bold text-slate-500 relative pb-10 pt-32 justify-center text-center left-72">About 
                <script className="flex flex-row relative text-5xl text-sky-500 pl-3">Me</script></p>
            </div>
            <div className="flex flex-col">
               <Image src="/People_in_programming.jpg" alt="PersonPrograming" width={550} height={550} className=" flex flex-col rounded-full absolute mr-96 left-40 " /> 
            </div>
            <div className="mr-56 pb-24 text-slate-500 flex flex-col ml-96 text-md font-semi-bold">
                <p className="flex flex-col ml-96 text-center">
                    Hello, I'm Sergey Moraru, a versatile professional with a strong background in management, team leadership, and production optimization. 
                    With a passion for technology and software development, 
                    I am currently transitioning into the dynamic and ever-evolving tech industry.
                    Throughout my career I have successfully led and supervised teams, ensuring the delivery of high-quality production standards. 
                    By implementing efficient processes and leveraging my expertise, 
                    I achieved significant cost savings, increased efficiency, and improved product quality.
                    </p>
                    <p className="flex flex-col ml-96 pt-10 pl-5 text-center">
                    Driven by my desire for continuous improvement, 
                    I am now focused on pursuing opportunities in the tech and software development space. 
                    With a strong foundation in management, logistics, and quality control, 
                    I bring a unique perspective and a keen eye for detail to my work.
                    </p>
                    <p className="flex flex-col ml-96 pt-10 text-center">
                    My technical skills include proficiency in AutoCAD, bSuite, enVision, Excel, SharePoint, Planner, Monday.com, 
                    as well as programming languages such as JavaScript, React.js, NodeJS, NextJS, HTML, and CSS. 
                    I am always eager to expand my knowledge and stay up to date with the latest industry trends.
                    </p>
            </div>
        </div>
    )
}


export default AboutMe