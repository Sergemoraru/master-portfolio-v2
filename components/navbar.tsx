import DarkMode from "./darkMode"


export const NavBar = () => {
    return (
        <div>
            <div className="flex flex-row justify-center items-center relative">
                <div className="flex flex-row justify-center items-center"> 
                    <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10">Home</button>
                </div>
                <div className="flex flex-row justify-center items-center ">
                    <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10">About</button>
                </div>
                <div className="flex flex-row justify-center items-center ">
                    <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10 ">Projects</button>
                </div>
                <div className="flex flex-row justify-center items-center ">
                    <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10 ">Resume</button>
                </div>
                <div className="flex flex-row justify-center items-center ">
                    <button className="text-2xl font-bold text-slate-700 hover:text-sky-500 relative p-10 ">Contact</button>
                </div>
            </div>
        </div>

    )
    
}

export default NavBar