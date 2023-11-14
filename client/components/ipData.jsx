import axios from "axios";
import React from "react";

//const IPGEO_API_KEY = process.env.IPGEO_API_KEY;

const baseURL = 'https://api.ipgeolocation.io/ipgeo?apiKey=' + 'TESTKEY123';

export default function IPData() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log('error: ', err)
        });
    }, []);

    return (
        <div>
            <h1>IP Data</h1>
            <p>{data}</p>
        </div>
    );
}
