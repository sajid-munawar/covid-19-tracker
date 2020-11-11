import React, { useEffect, useState } from "react";


function Country() {
    const [globalData, setGlobalData] = useState({})
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://disease.sh/v3/covid-19/countries")
            const data = await response.json();
            console.log("country= ", data)
            setGlobalData(data);
        }
        getData();
    }, [])
    return <div>
        <h1>Hello</h1>




        {/* <ul>Quote: { globalData.map((item, index) => (<li key={index}>,</li>)) }</ul> */}

        {/* {globalData[0]} */}
    </div>
}
export default Country;