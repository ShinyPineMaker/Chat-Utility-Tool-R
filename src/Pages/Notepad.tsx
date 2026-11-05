import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState } from "react";







function Notepad() {
    
    const getNotepadText = () => {
        return (localStorage.getItem("notepadText"));
    }

    const [textArea, setTextArea] = useState(() => getNotepadText());
   

    const saveNotepadText = (input: string) => {
        localStorage.setItem("notepadText", input);
        setTextArea(input);
    }

    return (
        <div>
            {Header()}
            
            <div className="min-h-screen max-w-full flex items-center justify-center            bg-linear-to-t from-blue-950 via-blue-700 to-blue-400">
                
                <div className="flex-col justify-center border m-5 p-10 rounded-2xl h-dvh w-8/12 bg-blue-400">

                    <div className="border-b border-dotted mb-5">
                        <h1 className="font-bold text-2xl">NotePad: </h1>
                    </div>

                    <textarea className="flex justify-center p-2 h-11/12 w-full bg-gray-200" onChange={(e)=>saveNotepadText(e.target.value)}>
                        {textArea}
                    </textarea>
                </div>
            </div>
            

        {Footer()}
        </div>
        
    );
}

export default Notepad;