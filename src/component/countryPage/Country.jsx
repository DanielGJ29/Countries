import react from "react";
import { Link } from "react-router-dom";

//Style
import "../../styles/Normalize.css";
import "../../styles/Countries.css";


const Country = ({name, flag, code, region})=>{
    return(
        <div className="container flag d-flex flex-column align-center">
    
            <h1>All Countries</h1>
            <div className="image">
                <img src={flag} alt={name} />
            </div>
            <p><span>Name: </span>{name}</p>
            <p><span>Region:</span> {region}</p>
            <Link to={`/details/${name}`}><button className="btn">Details</button></Link>

        </div>
    );
};

export default Country;