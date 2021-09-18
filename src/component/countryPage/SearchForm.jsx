import react from "react";


const SearchForm = ({setName, handleFetchCountryData})=>{
    return(
        <form action="" onSubmit={handleFetchCountryData}>
            <label htmlFor="">Search</label>
            <input type="text" onChange={e =>setName(e.target.value)} />
            <button>Send</button>
        </form>
    );
};

export default SearchForm;