import { NavLink } from "react-router-dom";
export const CountryCard=({country})=>{
    const {flags,name,population,region,capital}=country;
   return (
    <li className="country-card card">
          <img src={flags.svg} alt="" />
          <div className="countryInfo">
             <p>{name.common}</p>
             <p>Population: {population.toLocaleString()}</p>
             <p>Region:{region}</p>
             <p>Capital:{capital[0]}</p>
             <NavLink to={`/country/${name.common}`}> <button>Read More</button></NavLink>
          </div>
    </li>
   )
}