import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import countriesData from "../countries.json"

function CountriesList() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setCountries(countriesData);
    }, [])

    return (
        <div>
            <h2>Countries</h2>
            {countries.map((country) => {
                console.log(country)
                return (
                    <div key={country._id} className="country">
                        <Link to={`/countryDetails/${country.alpha3Code}`}><h3>{country.name.common}</h3></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;