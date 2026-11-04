import Footer from "./Components/Footer";
import Header from "./Components/Header";

function Notepad() {
    

    return (
        <div>
            {Header()}
            <div className="min-h-screen flex items-center justify-center            bg-linear-to-t from-blue-950 via-blue-700 to-blue-400">
                <h1>
                    This is Notepad Page!
                </h1>
            </div>
            

        {Footer()}
        </div>
        
    );
}

export default Notepad;