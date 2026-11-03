import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex-nowrap">
            <label className="px-4 py-4">
                Insert your username:
            </label>
            <input className="border" type="text" placeholder="i.e: John">
            </input>
        </div>
    )
}

export default Login;
