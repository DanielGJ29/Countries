import React, { useState } from "react";

//component
import Country from "../component/countryPage/Country";
import SearchForm from "../component/countryPage/SearchForm";

const CountryPage = ()=>{

    const [countryData, setCountryData]= useState([]);
    const [name, setName] = useState(null);

    //funciones
    const handleFetchCountryData = async () =>{

        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const result = await response.json();
        console.log(result);
    }




    return(
        <>
            <Country/>
            <SearchForm/>
        </>
    );
;}

export default CountryPage;