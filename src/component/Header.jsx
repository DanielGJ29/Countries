import react from "react";
//STYLE
import "../styles/Normalize.css";
import "../styles/Countries.css";

const Header = ({setName, handleFetchCountryData})=>{
    return(
        <div className="container header d-flex justify-center align-center">
            <form className="d-flex justify-around align-center justify-center justify-around" action="" onSubmit={handleFetchCountryData}>
                <label htmlFor="" className="">Search</label>
                <input type="text" onChange={e =>setName(e.target.value)} className="" />
                <button className="btn">Send</button>
            </form>
        </div>
    );
};

export default Header;