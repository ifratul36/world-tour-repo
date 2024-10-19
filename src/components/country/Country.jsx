
import { useState } from "react";
import "./country.css";

const Country = ({country, handleVisitedCountry}) => {
    console.log(country);
    const {name, flags, area, capital, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        // setVisited(true);
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited ? 'visited' :'non-visited'}`}>
            <img className="img" src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <h4>Official Name: {name.official}</h4>
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisitedCountry}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            {/* {visited && 'I have visited this country'}  */}
            {visited ? 'I have visited this country' : 'I want to visit'} 
        </div>
    );
};

export default Country;