import React, { useEffect, useState } from "react";


function Country() {
    const [globalData, setGlobalData] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://disease.sh/v3/covid-19/countries")
            const data = await response.json();
            console.log("country= ", data)
            setGlobalData(data);
        }
        getData();
    }, [])
    // console.log(globalData)
    return (<div>    
        {Object.keys(globalData)}  
    

</div>)
}
export default Country;




