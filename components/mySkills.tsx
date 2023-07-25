import Image from "next/image"
import React from "react"



const  MySkills = () => {
    return(
        <div>
            <div className="flex flex-col pt-32">
               <h1 className='flex flex-row mt-48 justify-center p-10 text-5xl font-bold text-center text-slate-500'>My 
               <script className="flex flex-row relative text-5xl font-bold text-sky-500 left-3"> Skills</script></h1>
            </div>
            <hr className="relative bottom-5"></hr>
            <div className="flex flex-row text-center justify-center">
                <div>
                    <Image src="/next.svg" alt="next" width={100} height={100} 
                    className=" flex flex-row relative justify-center top-14 right-10" />
                </div>
                <div>
                    <Image src="/react-2.svg" alt="PrimarySkills" width={100} height={100} 
                    className=" flex flex-row relative justify-center top-14 " />
                </div>
                <div>
                    <Image src="/typescript.svg" alt="PrimarySkills" width={100} height={100} 
                    className=" flex flex-row relative justify-center top-14 left-10" />
                </div>
                <div>
                    <Image src="/logo-javascript.svg" alt="PrimarySkills" width={100} height={100} 
                    className=" flex flex-row relative justify-center top-14 left-20" />
                </div>
                <div className="">
                    <Image src="/nodejs-icon.svg" alt="PrimarySkills" width={50} height={50} 
                    className=" flex flex-row relative justify-center top-14 left-32" /> 
                    <p className="flex flex-row relative text-right justify-center left-52 top-3 font-semibold fon t-mono text-xl">Node</p>
                </div>
            </div>
            <div className="flex flex-row text-center justify-center pt-8">
                <Image src="/prisma-2.svg" alt="next" width={100} height={100} 
                className=" flex flex-row relative justify-center top-14 right-10" />
                <Image src="/tailwindcss.svg" alt="PrimarySkills" width={100} height={100} 
                className=" flex flex-row relative justify-center top-14 " />
                <Image src="/html-1.svg" alt="PrimarySkills" width={100} height={100} 
                className=" flex flex-row relative justify-center top-14 left-10" />
                <Image src="/css-3.svg" alt="PrimarySkills" width={100} height={100} 
                className=" flex flex-row relative justify-center top-14 left-20" />
            </div>
        </div>
    )
}

export default MySkills