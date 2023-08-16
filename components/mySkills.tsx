import Image from "next/image";
import React from "react";

const MySkills = () => {
  return (
    <div>
      <div className="flex flex-col mt-10">
        <h1 className="flex flex-col justify-center py-10 text-5xl font-bold text-center text-slate-700">
          What I know
        </h1>
        <h3 className="flex justify-center font-semibold mb-10 text-slate-600 text-xl">
          Eager to dive into every corner of technology to create dynamic and
          impactful solutions.
        </h3>
      </div>
      <div>
        <div className="relative flex justify-center items-center ml-32 ">
          <div className="relative inline-grid grid-cols-4 ">
            <div className="relative flex justify-center border border-solid border-slate-400 bg-slate-100 rounded-2xl mr-10 ">
              <h2 className="relative left-16 text-sky-600">Front End</h2>
              <div className="relative top-12 inline-grid grid-cols-2 -ml-32 space-x-5 space-y-5">
                <Image
                  src="/next.svg"
                  alt="next"
                  width={100}
                  height={100}
                  className="relative top-16"
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
                  className="relative top-5"
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
            </div>
            <div className="relative flex justify-center border border-solid border-slate-400 bg-slate-100 rounded-2xl mr-10">
              <h2 className="relative text-sky-600 left-4 ">Back End</h2>
              <div className="relative top-12">
                <Image
                  src="/nodejs-icon.svg"
                  alt="nodejs"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
            </div>
            <div className="flex justify-center border border-solid border-slate-400 bg-slate-100 rounded-2xl mr-10">
              <h2 className="text-sky-600 ">Database</h2>
              <div className="relative top-12">
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
            </div>
            <div className="flex justify-center border border-solid border-slate-400 bg-slate-100 rounded-2xl">
              <h2 className="text-sky-600">Languages</h2>
              <div className="relative top-10">
                <Image
                  src="/united-states-of-america.svg"
                  alt="english"
                  width={100}
                  height={100}
                  className=""
                />
                <Image
                  src="/Flag_of_Russia.svg.png"
                  alt="russian"
                  width={100}
                  height={100}
                  className="relative pt-5"
                />
                <Image
                  src="/ukrainef.svg"
                  alt="ukrainian"
                  width={100}
                  height={100}
                  className="relative pt-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
