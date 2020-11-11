import React, { useEffect, useState } from "react";


function Country() {
    const [globalData, setGlobalData] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://disease.sh/v3/covid-19/countries")
            const data = await response.json();
            console.log("country= ", data[1].country)
            setGlobalData(data);
        }
        getData();
    }, [])
   
    return (<div>    
  

        {Object.keys(globalData).map((key,ind)=>{
            return (
                <div><ul>
                    <li><h3>{key}</h3> </li>
                    <li></li> <h3>{globalData[key].country}</h3>
                     <h3>Cases       {globalData[key].cases}</h3>
                     <h3>{globalData[ind].cases}</h3>
            
            
            </ul>
            </div>
            
            
            )

        })}
       
                               </div>)
        
    


}
export default Country;




