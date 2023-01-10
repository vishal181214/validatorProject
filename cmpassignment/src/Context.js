import React from "react";

const countryData = React.createContext(
    [
        {
            name: "Germany",
            states: [
                { name: "Bavaria",cities: ["Munich", "Nuremberg", "Augsburg"]},
                { name: "Bremen",cities: ["Altstadt", "Arbergen", "Arsten"]},
                { name: "Hamburg",cities: ["Altona", "Eimsbüttel", "Wandsbek"]}],
            code:"+49",
        },
        {
            name: "Spain",
            states: [
                {name: "Andalusia",cities: ["Seville", "Granada", "Cadiz"]},
                {name: "Catalonia",cities: ["Barcelona", "Reus","Sabadell"]},
                {name: "Galicia",cities: ["Vigo", "Lugo", "Ferrol"]}],
            code:"+34",
        },
        { 
            name: "USA", 
            states: [
                { name: "Alabama", cities: ["Phoenix","Tucson","Mesa"] },
                { name: "Alaska", cities: ["Anchorage","Fairbanks","Juneau"] },
                { name: "Arizona", cities: ["Maricopa","Prescott","	Florence"] }],
            code:"+1",         
        },
        {
            name: "China",
            states: [
                { name: "Anhui", cities: ["Hefei","Wuhu","Bengbu"]},
                { name: "Fujian", cities: ["Fuzhou","Quanzhou","Xiamen"] },
                { name: "Yunnan", cities: ["Kunming","Lijiang","Dali"] },
            ],
            code:"+86",
        },
        {
            name: "India",
            states: [
                { name: "Delhi", cities: ["Delhi"] },
                { name: "Maharashtra",cities: ["Pune", "Nagpur", "Mumbai", "Nashik", "Wardha", "Amaravati"]},
                { name: "Madhya Pradesh",cities: ["Jabalpur", "Bhopal", "Gwalior", "Chhindwara"]},
                { name: "Kerala", cities: ["Kochi", "Kollam", "Malappuram", "Kannur"]},
                { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Veraval"]},
                { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Ajmer", "Kota"]},
                { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Varanasi", "Prayagraj"]},
            ],
            code:"+91",
        }
    ]
);

export default countryData;