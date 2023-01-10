import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap';
import countryData from '../Context';
function Country() {
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedState, setSelectedState] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [data, setData] = useState();
    const [dataState, setDataState] = useState();
    const [dataCity, setDataCity] = useState();

    const country = useContext(countryData);
    // const country = [
    //     {
    //         name: "Germany",
    //         states: [
    //             { name: "Bavaria",cities: ["Munich", "Nuremberg", "Augsburg"]},
    //             { name: "Bremen",cities: ["Altstadt", "Arbergen", "Arsten"]},
    //             { name: "Hamburg",cities: ["Altona", "Eimsbüttel", "Wandsbek"]}]
    //     },
    //     {
    //         name: "Spain",
    //         states: [
    //             {name: "Andalusia",cities: ["Seville", "Granada", "Cadiz"]},
    //             {name: "Catalonia",cities: ["Barcelona", "Reus","Sabadell"]},
    //             {name: "Galicia",cities: ["Vigo", "Lugo", "Ferrol"]}]
    //     },
    //     { 
    //         name: "USA", 
    //         states: [
    //             { name: "Alabama", cities: ["Phoenix","Tucson","Mesa"] },
    //             { name: "Alaska", cities: ["Anchorage","Fairbanks","Juneau"] },
    //             { name: "Arizona", cities: ["Maricopa","Prescott","	Florence"] }] 
    //     },
    //     {
    //         name: "China",
    //         states: [
    //             { name: "Anhui", cities: ["Hefei","Wuhu","Bengbu"]},
    //             { name: "Fujian", cities: ["Fuzhou","Quanzhou","Xiamen"] },
    //             { name: "Yunnan", cities: ["Kunming","Lijiang","Dali"] },
    //         ]
    //     },
    //     {
    //         name: "India",
    //         states: [
    //             { name: "Delhi", cities: ["Delhi"] },
    //             { name: "Maharashtra",cities: ["Pune", "Nagpur", "Mumbai", "Nashik", "Wardha", "Amaravati"]},
    //             { name: "Madhya Pradesh",cities: ["Jabalpur", "Bhopal", "Gwalior", "Chhindwara"]},
    //             { name: "Kerala", cities: ["Kochi", "Kollam", "Malappuram", "Kannur"]},
    //             { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Veraval"]},
    //             { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Ajmer", "Kota"]},
    //             { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Varanasi", "Prayagraj"]},
    //         ]
    //     }
    // ]

    const availableState = country.find((c) => c.name === selectedCountry);
    const availableCities = availableState?.states?.find(
        (s) => s.name === selectedState
    );

    function printdata() {
        console.log(selectedCountry, selectedState, selectedCity);
        console.log(data, dataState, dataCity);
    }
    return (
        <div>
            <div id="container">
                <h2>Cascading or Dependent Dropdown using React</h2>
                <Form.Select aria-label="Default select example" value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}>

                    <option>Select Country</option>
                    {country.map((value, key) => {
                        return (
                            <option value={value.name} key={key}>
                                {value.name}
                            </option>
                        );
                    })}
                </Form.Select>

                <Form.Select aria-label="Default select example" value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}>
                    <option>Select State</option>
                    {availableState?.states.map((e, key) => {
                        return (
                            <option value={e.name} key={key}>
                                {e.name}
                            </option>
                        );
                    })}
                </Form.Select>

                <Form.Select aria-label="Default select example" value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}>
                    <option>Select City</option>
                    {availableCities?.cities.map((e, key) => {
                        return (
                            <option value={e.name} key={key}>
                                {e}
                            </option>
                        );
                    })}
                </Form.Select>

            </div>
            <button onClick={printdata}>Click</button>

        </div>
    )
}

export default Country
