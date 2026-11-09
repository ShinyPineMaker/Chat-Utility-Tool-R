import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import getPresetMessages from "./Components/PresetMessages";



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


    
    const [copyThat, setCopyThat] = useState("");
    const [messages, setMessages] = useState (()=> getMessages());
    const presetMessages = getPresetMessages();

    

    



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

    const toggleAlt = (msg: {text: string, alt?: string, isAlt?: boolean}) => ({isAlt: !msg.isAlt})

    const showMessage = (msg: {text: string, alt?: string, isAlt?: boolean}) => {

        if (msg.isAlt) {
            return msg.alt;
        };

        return msg.text;
    }

    return(        

        
        
        <div>
            {Header()}
            <div className="min-h-screen flex justify-center            bg-linear-to-t from-blue-950 via-blue-700 to-blue-400">

                

                <div className="flex-col justify-center border m-5 p-10 rounded-2xl w-8/12 h-fit bg-blue-400">

                    <div className="flex w-full border-b border-dotted mb-5">
                        <h1 className="inline-flex w-11/12 font-bold text-2xl">Messages: </h1>

                        <span className="inline-flex w-full font-bold">
                            {copyThat}
                        </span>

                        <button className="inline-flex w-fit h-auto px-2 py-2 mb-3 border rounded-3xl" onClick={addMessages}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 hover:text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M12 5v14M5 12h14"></path>
                            </svg>
                        </button>

                        

                    </div>

                    

                    <div>
                        {/* Default pre-made messages go here */}
                        <ul className="flex-col">
                            {presetMessages.map((msg, i) => 
                                (
                                    <li key={i} className="flex justify-around px-3 py-2 min-w-full">
                                        <span className="flex items-center border rounded-2xl px-3 py-2 w-10/12">
                                            {showMessage(msg)}
                                        </span>

                                        <button className="flex border rounded-2xl px-3 py-2" onClick={() => toggleAlt(msg)}>
                                            <svg className="w-10 h-10 hover:text-blue-700"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9L13 3M19 9H16.2C15.0799 9 14.5198 9 14.092 8.78201C13.7157 8.59027 13.4097 8.28431 13.218 7.90798C13 7.48016 13 6.9201 13 5.8V3M19 9V11M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.07989 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H11M19.5 20.2361C18.9692 20.7111 18.2684 21 17.5 21C15.8431 21 14.5 19.6569 14.5 18C14.5 16.3431 15.8431 15 17.5 15C18.8062 15 19.9175 15.8348 20.3293 17M21 14.5V17.5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H10.5M13 3L19 9M19 9V11M21 14.5V17.5H18M19.5 20.2361C18.9692 20.7111 18.2684 21 17.5 21C15.8431 21 14.5 19.6569 14.5 18C14.5 16.3431 15.8431 15 17.5 15C18.8062 15 19.9175 15.8348 20.3293 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </button>

                                        <button className="flex border rounded-2xl px-3 py-2" onClick={() => copyText(msg.text)}>
                                            <svg className="w-10 h-10 hover:text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3V6.4C15 6.96005 15 7.24008 15.109 7.45399C15.2049 7.64215 15.3578 7.79513 15.546 7.89101C15.7599 8 16.0399 8 16.6 8H20M10 8H6C4.89543 8 4 8.89543 4 10V19C4 20.1046 4.89543 21 6 21H12C13.1046 21 14 20.1046 14 19V16M16 3H13.2C12.0799 3 11.5198 3 11.092 3.21799C10.7157 3.40973 10.4097 3.71569 10.218 4.09202C10 4.51984 10 5.0799 10 6.2V12.8C10 13.9201 10 14.4802 10.218 14.908C10.4097 15.2843 10.7157 15.5903 11.092 15.782C11.5198 16 12.0799 16 13.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V7L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path> </g></svg>
                                        </button>
                                    </li>
                                )
                            )
                            }
                        </ul>
                    
                        <div className="border-t border-dotted my-4"></div>
                        
                        {/* User added messages go here */}
                        <ul>
                            {messages.map((msg, i) =>
                            (
                                <li key={i} className="flex justify-around px-3 py-2 min-w-full">
                                    <span className="flex items-center border rounded-2xl px-3 py-2 w-11/12">
                                        {msg}
                                    </span>
                                    
                                    <button className="flex border rounded-2xl px-3 py-2" onClick={() => copyText(msg)}>
                                        <svg className="w-10 h-10 hover:text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3V6.4C15 6.96005 15 7.24008 15.109 7.45399C15.2049 7.64215 15.3578 7.79513 15.546 7.89101C15.7599 8 16.0399 8 16.6 8H20M10 8H6C4.89543 8 4 8.89543 4 10V19C4 20.1046 4.89543 21 6 21H12C13.1046 21 14 20.1046 14 19V16M16 3H13.2C12.0799 3 11.5198 3 11.092 3.21799C10.7157 3.40973 10.4097 3.71569 10.218 4.09202C10 4.51984 10 5.0799 10 6.2V12.8C10 13.9201 10 14.4802 10.218 14.908C10.4097 15.2843 10.7157 15.5903 11.092 15.782C11.5198 16 12.0799 16 13.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V7L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path> </g></svg>
                                    </button>
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