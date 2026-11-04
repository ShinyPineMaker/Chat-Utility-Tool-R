import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {

    const [name, setName] = useState("");
    

    function saveName(){
        localStorage.setItem("name", name);
        return(console.log("save", {name}));
    }




    return (
        <div className="flex-nowrap">
            <label className="px-4 py-4">
                Insert your username:
            </label>
            <input className="border" type="text" placeholder="i.e: John" value={name} onChange={(e) => setName(e.target.value)}>
            </input>
            <Link to={"/Messages"}>
                <button onClick={saveName}>
                    Save
                </button>
            </Link>
        </div>
    )
}