import React, { useState } from "react";

//component
import Country from "../component/countryPage/Country";
import SearchForm from "../component/countryPage/SearchForm";

const CountryPage = ()=>{

    const [countryData, setCountryData]= useState([]);
    const [name, setName] = useState(null);

    //Funciones
    const handleFetchCountryData = async (e) =>{
        e.preventDefault();

        const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
        const result = await response.json();
        console.log(result);
    }




    return(
        <>
            <Country/>
            <SearchForm setName={setName} handleFetchCountryData={handleFetchCountryData}/>
        </>
    );
;}

export default CountryPage;