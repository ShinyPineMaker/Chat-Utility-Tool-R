import { Link } from "react-router-dom";


function Navbar () {
    return (
        <div>
            <nav className="bg-gray-100">
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
                        <Link to="/Messages" className="flex items-center py-5 px-4 text-gray-700 hover:text-gray-900">
                            <span className="font-bold">Notepad</span>
                        </Link>
                        <Link to="/Messages" className="flex items-center py-5 px-4 text-gray-700 hover:text-gray-900">
                            <span className="font-bold">Query</span>
                        </Link>
                    </div>
                </div>

                {/* <!-- secondary nav --> */}
                <div className="hidden md:flex items-center space-x-1">
                    <Link to="/Messages" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                        <span className="font-bold">You</span>
                    </Link>
                </div>

            
            {/*     <!-- mobile button goes here --> 
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
            */}
            
            </div>
            </div>

            {/*}
                    <!-- mobile menu -->
            <div className="mobile-menu hidden md:hidden">
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
            </div>

            */}

            </nav> 
            
            

            {/* content goes here 
            <div className="py-32 text-center">
            <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
            </div>
            */}
        </div>
    )
}


        

export default Navbar