import axios from "axios";
import React from "react";

//const IPGEO_API_KEY = process.env.IPGEO_API_KEY;

const baseURL = 'https://api.ipgeolocation.io/ipgeo?apiKey=' + 'TESTAPI123';

export default function IPData() {
    const [data, setData] = React.useState(null);
    const [dataList, setDataList] = React.useState(null);
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const didMount = React.useRef(false);

    React.useEffect(() => {
        axios.get(baseURL).then((res) => {
            console.log('Response Data:', res.data);
            setData(res.data);
        }).catch((err) => {
            console.log('error: ', err);
        });
    }, []);
    React.useEffect(() => {
        if(!didMount.current) {
            return () => {didMount.current = true};
        }
        console.log('State Data:', data);
        let dataList = [];
        for (const key in data) {
            dataList.push(<li key={key}>{key + ': ' + JSON.stringify(data[key])}</li>)
        }
        setDataList(dataList);
        setDataLoaded(true);
    }, [data])

    if (dataLoaded) {    
        return (
            <div>
                <h1>IP Data</h1>
                <ul>{dataList}</ul>
            </div>
        );
    } else {
        return (
            <div>
                <h1>IP Data</h1>
                <p>DataLoading</p>
            </div>
        );
    }
}

/**
 * Response Data: 
{ip: '188.215.95.84', continent_code: 'NA', continent_name: 'North America', country_code2: 'US', country_code3: 'USA', …}
calling_code
: 
"+1"
city
: 
"Los Angeles"
connection_type
: 
""
continent_code
: 
"NA"
continent_name
: 
"North America"
country_capital
: 
"Washington, D.C."
country_code2
: 
"US"
country_code3
: 
"USA"
country_flag
: 
"https://ipgeolocation.io/static/flags/us_64.png"
country_name
: 
"United States"
country_name_official
: 
"United States of America"
country_tld
: 
".us"
currency
: 
{code: 'USD', name: 'US Dollar', symbol: '$'}
district
: 
""
geoname_id
: 
"5332870"
ip
: 
"188.215.95.84"
is_eu
: 
false
isp
: 
"NET GATE COMUNICATII SRL"
languages
: 
"en-US,es-US,haw,fr"
latitude
: 
"34.05357"
longitude
: 
"-118.24545"
organization
: 
"IPXO LIMITED"
state_code
: 
"US-CA"
state_prov
: 
"California"
time_zone
: 
{name: 'America/Los_Angeles', offset: -8, offset_with_dst: -8, current_time: '2023-11-15 06:19:12.240-0800', current_time_unix: 1700057952.24, …}
zipcode
: 
"90012"
[[Prototype]]
: 
Object
 */