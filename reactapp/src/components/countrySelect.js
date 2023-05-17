import { React, useState } from 'react'

export default function CountrySelect() {

    /* collect of array object for countory state and city */

    const Countories = [
        {
            name: "India",
            stata: [
                { name: "Dehli", cities: ["iarea 1", "iarea 2","iarea 3"] },
                { name: "Up", cities: ["iarea 3", "iarea 4"] },
                { name: "Haryana", cities: ["iarea 5", "iarea 6"] }
            ]
        },
        {
            name: "USA",
            stata: [
                { name: "USA 1", cities: ["uarea 1", "uarea 2"] },
                { name: "USA 2", cities: ["uarea 3", "uarea 4"] },
                { name: "USA 3", cities: ["uarea 5", "uarea 6"] }
            ]
        }
    ];

    const [country, setCountry] = useState('--country--');
    const [state, setState] = useState('--state--');
    const [city, setCity] = useState('--city--');


    const [stata, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const chnagecountry = (e) => {

        setCountry(e.target.value)
        setStates(Countories.find(ctr => ctr.name === e.target.value).stata)
    }

    const chnageState = (e) =>{
        setState(e.target.value)
        setCities(stata.find(sta=> sta.name === e.target.value).cities)
    }
    const chnageCity = (e) =>{
        setCity(e.target.value)
      }
    return (
        <>
            <div className='container col-md-6 mt-4'>
                <h4>Select Country State and City</h4>
                <select className="form-select form-select-lg mb-3 mt-3" onChange={chnagecountry} aria-label=".form-select-lg example" >
                    <option selected>{country}</option>
                    {Countories.map((ctr) => (
                        <option value={ctr.name}>{ctr.name}</option>
                    )
                    )}
                </select>
                <select className="form-select form-select-sm mb-3" onChange={chnageState}  aria-label=".form-select-sm example">
                    <option selected>{state}</option>

                    {stata.map((sta) => (
                        <option value={sta.name}>{sta.name}</option>

                    ))}
                </select>
                <select className="form-select form-select-sm mb-2" onChange={chnageCity}  aria-label=".form-select-sm example">
                    
                    <option selected>{city}</option>

                    {cities.map(city => (

                        <option value={city}>{city}</option>

                    ))}

                </select>
                <button type="button" className="btn btn-primary btn-xs">Save</button>
            </div>
        </>
    )

}
