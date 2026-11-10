import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import getPresetMessages from "./Components/PresetMessages";
import { type Message } from "./Components/PresetMessages";


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
    const [presetMessages, setPresetMessages] = useState<Message[]>(() => getPresetMessages());


    useEffect(()=>{
            localStorage.setItem("messages", JSON.stringify(messages));
        }, 
        [messages]
    )

    const copyText = (text?: string) => {
        if (text){
            navigator.clipboard.writeText(text);
            setCopyThat("Copied!");
            setTimeout(() => setCopyThat(""), 3000);
        }
        return;
    }


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

    const showAltIcon = (msg: Message) => {
        if (msg.altText) {
            return (
                <button onClick={() => toggleAlt(msg.id)} className="flex border rounded-2xl px-3 py-2 max-h-16 bg-blue-200 hover:bg-blue-400">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>reload</title> <path d="M0 16q0-2.784 1.088-5.312t2.912-4.384 4.384-2.912 5.344-1.088q2.784 0 5.312 1.088t4.384 2.912 2.912 4.384 1.088 5.312h2.304q0.736 0 1.28 0.416t0.8 1.024 0.16 1.28-0.64 1.184l-4.576 4.576q-0.672 0.672-1.6 0.672t-1.632-0.672l-4.576-4.576q-0.512-0.512-0.608-1.184t0.128-1.28 0.8-1.024 1.312-0.416h2.272q0-2.464-1.216-4.576t-3.328-3.328-4.576-1.216-4.608 1.216-3.328 3.328-1.216 4.576 1.216 4.608 3.328 3.328 4.608 1.216q1.728 0 3.36-0.64l3.424 3.392q-3.136 1.824-6.784 1.824-2.816 0-5.344-1.088t-4.384-2.912-2.912-4.384-1.088-5.344z"></path> </g></svg>
                </button>
                
            )
        }

        else {
            return (
                <button className="flex border rounded-2xl px-3 py-2 max-h-16 bg-blue-200 hover:bg-blue-400"> 
                    <svg className="w-10 h-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.462 256.462" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#000000" d="M67.509,103.278c0,16.475,0.483,31.171,1.939,45.539h-0.322 c-5.006-12.274-11.307-25.831-17.769-37.305L28.748,71.623H0v108.854h22.614v-32.782c0-17.769-0.328-33.116-1.134-47.645h0.644 c5.167,12.751,12.435,26.815,18.897,38.427l23.253,42.001h25.843V71.623H67.509V103.278z"></path> <path fill="#000000" d="M103.352,186.778h16.313l34.56-117.094h-16.313L103.352,186.778z"></path> <path fill="#000000;" d="M222.54,71.629h-32.293l-33.116,108.854h25.359l7.751-27.949h31.165l8.401,27.949h26.654 C256.462,180.483,222.54,71.629,222.54,71.629z M193.786,134.12l6.468-23.092c1.778-6.301,3.389-14.541,5.006-21.003h0.322 c1.617,6.462,3.556,14.541,5.49,21.003l6.784,23.092H193.786z"></path> </g> </g></svg>
                </button>
                
            )
        }
    }

    const toggleAlt = (i: number) => {
        setPresetMessages((prev) => 
            prev.map((m) => (m.id === i ? {...m, isAlt: !m.isAlt} : m))
        )
    }

    const showMessage = (msg: Message) => {

        if (msg.isAlt == true) {
            return msg.altText;
        };

        return msg.text;
    }

    

    return(        

        
        
        <div>
            <Header />
            <div className="min-h-screen flex justify-center            bg-linear-to-t from-blue-950 via-blue-700 to-blue-400">

                

                <div className="flex-col justify-center border m-5 p-10 rounded-2xl w-8/12 h-fit bg-blue-400 text-2xl">

                    <div className="flex w-full border-b border-dotted mb-5">
                        <h1 className="inline-flex w-11/12 font-bold text-4xl">Messages: </h1>

                        <span className="inline-flex w-full font-bold">
                            {copyThat}
                        </span>

                        <button className="inline-flex w-fit h-auto px-2 py-2 mb-3 border rounded-3xl bg-blue-200 hover:bg-blue-400" onClick={addMessages}>
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
                                        <span className="flex items-center border rounded-2xl px-3 py-2 w-10/12 bg-blue-200">
                                            {showMessage(msg)}
                                        </span>

                                        
                                        {showAltIcon(msg)}
                                        

                                        <button onClick={() => copyText(showMessage(msg))} className="flex border rounded-2xl px-3 py-2 max-h-16 bg-blue-200 hover:bg-blue-400">
                                            <svg className="w-10 h-10 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3V6.4C15 6.96005 15 7.24008 15.109 7.45399C15.2049 7.64215 15.3578 7.79513 15.546 7.89101C15.7599 8 16.0399 8 16.6 8H20M10 8H6C4.89543 8 4 8.89543 4 10V19C4 20.1046 4.89543 21 6 21H12C13.1046 21 14 20.1046 14 19V16M16 3H13.2C12.0799 3 11.5198 3 11.092 3.21799C10.7157 3.40973 10.4097 3.71569 10.218 4.09202C10 4.51984 10 5.0799 10 6.2V12.8C10 13.9201 10 14.4802 10.218 14.908C10.4097 15.2843 10.7157 15.5903 11.092 15.782C11.5198 16 12.0799 16 13.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V7L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path> </g></svg>
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
                                    <span className="flex items-center border rounded-2xl px-3 py-2 w-11/12 bg-blue-200">
                                        {msg}
                                    </span>
                                    
                                    <button onClick={() => copyText(msg)} className="flex border rounded-2xl px-3 py-2 bg-blue-200">
                                        <svg className="w-10 h-10 hover:text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3V6.4C15 6.96005 15 7.24008 15.109 7.45399C15.2049 7.64215 15.3578 7.79513 15.546 7.89101C15.7599 8 16.0399 8 16.6 8H20M10 8H6C4.89543 8 4 8.89543 4 10V19C4 20.1046 4.89543 21 6 21H12C13.1046 21 14 20.1046 14 19V16M16 3H13.2C12.0799 3 11.5198 3 11.092 3.21799C10.7157 3.40973 10.4097 3.71569 10.218 4.09202C10 4.51984 10 5.0799 10 6.2V12.8C10 13.9201 10 14.4802 10.218 14.908C10.4097 15.2843 10.7157 15.5903 11.092 15.782C11.5198 16 12.0799 16 13.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V7L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path> </g></svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
            

        <Footer />
        </div>
        
    );
    

}

export default Messages