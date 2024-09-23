import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postapi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/layout/countrycard";
import { SearchFilter } from "../components/UI/search";

const Country=()=>{
    const [isPending,startTransition]=useTransition();
    const [country,setCountry]=useState([]);
    const [search,setSearch]=useState();
    const [filter,setFilter]=useState("all");
    useEffect(()=>{
        startTransition(async()=>{
          const res=await getCountryData();
          setCountry(res.data);
        })
    },[])
    if(isPending){
        return(<div className="loader">Loading...</div>)
    }
    const SearchCountry=(c)=>{
        if(search){
            return c.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return c;
    }
    const filterRegion=(c)=>{
        if(filter=="all")return c;
        return c.region === filter;
    }
    const filterCountries=country.filter((c)=>SearchCountry(c) && filterRegion(c));
    return(
        
        <section className="country">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}></SearchFilter>
           <ul className="grid grid-four-cols country-list">
            {
               filterCountries.map((c,index)=>{
                   return(<CountryCard country={c} key={index}></CountryCard>)
               })
            }
           </ul>
        </section>
    )
}
export default Country;