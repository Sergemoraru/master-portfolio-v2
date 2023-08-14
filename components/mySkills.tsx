import Image from "next/image"
import React from "react"



const  MySkills = () => {
    return (
      <div>
        <div className="flex flex-col pt-32">
          <h1 className="flex flex-row mt-48 justify-center p-10 text-5xl font-bold text-center text-slate-700">
            What I know
          </h1>
          <h3 className="flex justify-center font-semibold text-slate-600 text-xl">
            Eager to dive into every corner of technology to create dynamic and
            impactful solutions.
          </h3>
        </div>
        <div>
          <div className="relative ml-20">
            <div className="relative inline-grid grid-cols-4 ">
              <div className="relative inline-grid grid-cols-2 grid-rows-3 space-x-5 space-y-10">
                <h2 className="relative pb-20">Front End</h2>
                <Image
                  src="/next.svg"
                  alt="next"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/react-2.svg"
                  alt="react"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/typescript.svg"
                  alt="typescript"
                  width={100}
                  height={100}
                  className=" "
                />
                <Image
                  src="/logo-javascript.svg"
                  alt="javascript"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/tailwindcss.svg"
                  alt="tailwindcss"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/html-1.svg"
                  alt="html"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/css-3.svg"
                  alt="css"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <div>
                <h2>Back End</h2>
                <Image
                  src="/nodejs-icon.svg"
                  alt="nodejs"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <div>
                <h2>Database</h2>
                <Image
                  src="/prisma-2.svg"
                  alt="prisma"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/mongodb-icon-1.svg"
                  alt="mongodb"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/postgresql.svg"
                  alt="sql"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <div>
                <h2>Languages</h2>
                <Image
                  src="/united-states-of-america.svg"
                  alt="english"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/flag-of-russia.svg"
                  alt="russian"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/ukrainef.svg"
                  alt="ukrainian"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MySkills