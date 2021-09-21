import react, {useState, useEffect} from "react";


const Countries = props =>{

    const [countriesData, setCountriesData]= useState([]);
    const [name, setName] = useState(null);
    const [error, setError] = useState(false);

    //Funciones
    const handleFetchCountries = async (e) =>{
        // e.preventDefault();
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/all`);
            const result = await response.json();
          
            if(result.status){
                setError(result.message);
            }else{
                setCountriesData (result);
                console.log(result);
                setError(false);
            }
            
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(()=>{
        handleFetchCountries();
    },[]);
 

    return (
        
        <div className="container main-countries">
            {countriesData.map((country) =>{
                return(
                <div className="item-flag">
                    <img src={country.flag} alt="" />
                    <p className="name-country">{country.name}</p>  
               </div>
               )
            })};
         
        </div>
    );
};

export default Countries;