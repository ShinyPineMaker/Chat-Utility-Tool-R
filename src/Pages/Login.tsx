import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {

    const [name, setName] = useState("");
    

    function saveName(){
        localStorage.setItem("name", name);
        return(console.log("save", {name}));
    }




    return (
        <div className="min-h-screen flex items-center justify-center            bg-linear-to-t from-blue-950 via-blue-700 to-blue-400">
            
            <form onSubmit={saveName}>
                <div>
                    <div  className="font-bold text-white">
                        <input className="border rounded-3xl px-4 py-2" type="text" placeholder="Insert your username: " value={name} onChange={(e) => setName(e.target.value)}></input>
                        <Link to={"/Messages"}>
                            <button className="px-4 py-2 m-4 border rounded-3xl" onClick={saveName} type="submit">
                                Save
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
            
            
        </div>
    )
}