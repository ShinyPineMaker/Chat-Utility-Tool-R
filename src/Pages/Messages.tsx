import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";



function getMessages(){
    const storedMessages = localStorage.getItem("messages");

    if (storedMessages == null) return [];

    try{
        const parsedMessages = JSON.parse(storedMessages);
        return Array.isArray(parsedMessages) ? parsedMessages as string[] : [];
    }

    catch (e) {
        console.error("Invalid Messages in LocalStorage", e);
        return [];
    }
}

function saveMessages(messages: string[]){
    localStorage.setItem("messages", JSON.stringify(messages));
}






function Messages() {


    const name = localStorage.getItem("name");
    const [messages, setMessages] = useState (()=> getMessages());
    const [copyThat, setCopyThat] = useState("");


    useEffect(()=>{
        localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages])


    function addMessages(){
        const storedMessages = getMessages();
        
        let newMessage = prompt("Insert a new message", "Hello, how are you?");
        if (newMessage === null){
            return ;
        }
        if (newMessage.trim()=== ""){
            return ;
        }
        storedMessages.push(newMessage.trim());
        saveMessages(storedMessages);
        setMessages(storedMessages);
    }

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopyThat("Copied!");
        setTimeout(() => setCopyThat(""), 3000);
    }

    return(        
        
        <div>
            {Header()}
            <div className="min-h-screen flex justify-center            bg-linear-to-t from-blue-950 via-blue-700 to-blue-400">

                <div className="flex-col border m-5 p-5 rounded-2xl h-fit bg-blue-400">

                    <div className="flex">
                        <button className="px-2 py-2 m-4 border rounded-3xl" onClick={addMessages}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 hover:text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M12 5v14M5 12h14"></path>
                            </svg>
                            
                        </button>

                        <span className="flex w-full m-6 justify-end">
                            {copyThat}
                        </span>
                    </div>

                    <div>
                        {/* Default pre-made messages go here */}
                        <ul>
                            <li onClick={(e)=>copyText(e.currentTarget.textContent)} className="border rounded-2xl px-3 py-2 mx-2 my-4 hover:font-bold">
                                Bom dia, Meu nome é {name}! 
                            </li>
                            <li onClick={(e)=>copyText(e.currentTarget.textContent)} className="border rounded-2xl px-3 py-2 mx-2 my-4 hover:font-bold">
                                Pode me Informar?
                            </li>
                        </ul>
                    
                        {/* User added messages go here */}
                        <ul className="border-t border-dotted">
                            {messages.map((msg, i) =>
                            (
                                <li onClick={(e)=>copyText(e.currentTarget.textContent)}  className="border rounded-2xl px-3 py-2 mx-2 my-4 hover:font-bold"  key={i}>
                                    {msg}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
            

        {Footer()}
        </div>
        
    );
    

}

export default Messages