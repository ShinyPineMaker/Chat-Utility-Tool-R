import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar () {

    const[isHidden, setIsHidden] = useState(true);   

    let name = localStorage.getItem("name");
    if (name==null || name==""){
        name = "Clique aqui para alterar o nome";
    }

    


    return (
        <div>
            <nav className="bg-blue-400 border-2 text-2xl">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                <div className="flex space-x-4">
                    {/*<!-- logo --> */}
                    <div>
                    <Link to="/Messages" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                        <img className="flex max-h-4 px-2" src="/cutr.svg" alt="cutr logo"></img>
                        <span className="font-bold">C.U.T.R.</span>
                    </Link>
                    </div>

                    {/* <!-- primary nav --> */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/Messages" className="flex items-center py-5 px-4 text-gray-700 hover:text-gray-900">
                            <span className="font-bold">Messages</span>
                        </Link>
                        <Link to="/Notepad" className="flex items-center py-5 px-4 text-gray-700 hover:text-gray-900">
                            <span className="font-bold">Notepad</span>
                        </Link>
                        <Link to="/Queries" className="flex items-center py-5 px-4 text-gray-700 hover:text-gray-900">
                            <span className="font-bold">Query</span>
                        </Link>
                    </div>
                </div>

                {/* <!-- secondary nav --> */}
                <div className="hidden md:flex items-center space-x-1">
                    <Link to="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                        <span className="font-bold">{name}</span>
                    </Link>
                </div>

            
            {/* <!-- mobile button goes here -->  */}
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button" onClick={() => setIsHidden(!isHidden)}>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
            
            
            </div>
            </div>

            
            {/* <!-- mobile menu --> */}
            <div className={isHidden ? "mobile-menu hidden md:hidden" : "mobile-menu md:hidden"}>
                <Link to="/Messages" className="flex items-center py-5 px-4 text-gray-700 hover:text-gray-900">
                    <span className="font-bold">Messages</span>
                </Link>
                <Link to="/Notepad" className="flex items-center py-5 px-4 text-gray-700 hover:text-gray-900">
                    <span className="font-bold">Notepad</span>
                </Link>
                <Link to="/Query" className="flex items-center py-5 px-4 text-gray-700 hover:text-gray-900">
                    <span className="font-bold">Query</span>
                </Link>
            </div>
            </nav> 
            
        </div>
    )
}
