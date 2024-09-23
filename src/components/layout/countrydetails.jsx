import { useParams } from "react-router-dom";
import { useTransition, useState, useEffect } from "react";
import { getCountryIndData } from "../../api/postapi";
import { NavLink } from "react-router-dom";
export const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null); // Initialize as null instead of an array
    
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);
            console.log(res.data[0]);
            setCountry(res.data[0]);
        });
    }, [params.id]); // Added params.id as a dependency

    if (!country) {
        // Show a loading state or return null until the data is fetched
        return <div>Loading...</div>;
    }

    return (
        <section className="grid grid-two-cols">
            <div className="country-para">
                <h1>{country.name?.official || "Country name not available"}</h1>
                <p>Population: {country.population?.toLocaleString() || "Not available"}</p>
                <p>Region: {country.region || "Not available"}</p>
                <p>SubRegion: {country.subregion || "Not available"}</p>
                <p>Currency: {Object.keys(country.currencies).map((c)=>
                      country.currencies[c].name).join(", ")}</p>
            </div> 
            <div className="country-card">
                <img src={country.flags?.svg || ""} alt="Country flag" />
            </div>
            
            <NavLink to="/country"><button>Go Back</button></NavLink>   
        </section>
    );
};
