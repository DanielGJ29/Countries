import React, { useState } from "react";

//component
import SearchForm from "../component/Header";
import Country from "../component/countryPage/Country";
import FetchError from "../component/FetchError";
import Header from "../component/Header";

const CountryPage = ()=>{

    const [countryData, setCountryData]= useState([]);
    const [name, setName] = useState(null);
    const [error, setError] = useState(false);

    //Funciones
    const handleFetchCountryData = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
            const result = await response.json();
          
            if(result.status){
                setError(result.message);
            }else{
                setCountryData (result);
                console.log(result);
                setError(false);
            }
            
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div>
            
            <Header setName={setName} handleFetchCountryData={handleFetchCountryData}/>

            {error ?(
            <FetchError message={error}/>) : 
            (
            countryData.map(infoCountry => (
             <Country key={infoCountry.name} name={infoCountry.name} flag={infoCountry.flag} code={infoCountry.alpha2Code} region={infoCountry.region}/>
            )))}
            
        </div>
    );
}

export default CountryPage;