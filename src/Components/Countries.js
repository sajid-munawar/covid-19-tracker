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
    console.log(globalData)
    return (<div>    
    {(() => {
        if (globalData) {

            globalData.map (data => {
                console.log(data);
                return (
                    <div>
                        <h4>{data.country}</h4>
                    </div>
                )
            })
        }
    })()}

</div>)
}
export default Country;







// return (<div>
        
//     {globalData.map(data=>{
//         return (<div>data.country</div> )
//     })}       

// </div>)
{/* {globalData[0]} */}
{/* <ul>Quote: { globalData.map((item, index) => (<li key={index}>,</li>)) }</ul> */}


