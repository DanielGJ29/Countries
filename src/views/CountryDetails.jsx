import react, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import FetchError from "../component/FetchError";

const CountryDetails = props =>{
    
    const {name} = useParams();

    const [details, setDetails] = useState([]);
    const [error, setError] = useState(false);

    const handleFetchDetails = async props =>{
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
            const result = await response.json();
            
            console.log(result);
            if(result.status){
                setError(result.message);
                console.log(error);
            }else{
                setDetails(result[0]);
                console.log(result);
                setError(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        handleFetchDetails();
    },[]);

    return(
        <>
        {error ? (
        <FetchError message={error}/>): 
        (<div className="container flag d-flex flex-column align-center">
        <h1>{details.name}</h1>
        <div className="image">
            <img src={details.flag} alt={details.name} />
        </div>
        <p><span>region: </span>{details.region} </p>
        <p><span>subregion: </span>{details.subregion}</p>
        {/* {details.languages.map(language =>(
        <p><span>language: </span>{language.nativeName}</p>
        ))} */}
        {/* <p><span>language: </span>{details.languages[0].name}</p> */}
        <p><span>capital: </span>{details.capital}</p>
        <p><span>population: </span>{details.population}</p>
        <Link to="/"><button className="btn">Back</button></Link>

    </div>)}
        
        </>
    );
};
export default CountryDetails;
