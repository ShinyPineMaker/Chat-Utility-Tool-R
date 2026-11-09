import Header from "./Components/Header";
import Footer from "./Components/Footer"
import { fleetRoutes } from "./Components/Routes";
import { useState } from "react";

const presetNeighbourhoods = Array.from(
    new Set(fleetRoutes.flatMap(
        (r) => r.neighbourhoods
    ))
).sort();





function Queries() {
    const [query, setQuery] = useState("");
    const routes = query ? 
    fleetRoutes.filter(
        (r) => r.neighbourhoods.includes(query)
    ).map(
        (r) => r.routeName
    ) : [] ;

    const answer = routes.join(", ");



    return (
        <div>
            <Header />
            <div className="min-h-screen flex items-center justify-center            bg-linear-to-t from-blue-950 via-blue-700 to-blue-400 text-2xl">
                <div className="flex-col min-h-fill justify-center">
                    <input
                        type="text"
                        list="neighbourhoods"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="insert the neighbourhood name: "
                        className="bg-blue-400 rounded-2xl px-3 py-4"
                    />
                    <datalist id="neighbourhoods">
                        {presetNeighbourhoods.map((n) => (
                        <option key={n} value={n} />
                        ))}
                    </datalist>

                    <span className="flex m-5 text-white font-bold w-full">
                        {answer}
                    </span>
                    
                </div>
            </div>
            

        <Footer />
        </div>
    );
}

export default Queries