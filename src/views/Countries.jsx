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
        <div>
            {countriesData.map((item) =>(
               <img src={item.flag} alt="" />
               
                
              
            ))};
         
        </div>
    );
};

export default Countries;