import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: "0 auto",
        marginTop: 50,
    },
    paper: {
        height:"450px",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // backgroundColor:"rgb(0,0,255,0.5)"
    },
    title : {
        // color:"rgb(0,0,255,0.5)",
        color: "#3f51b5",
        textTransform : "capitalize"
        // textTransform : "uppercase"
    },
    total : {
        backgroundColor:"rgb(0,0,255,0.5)"
    },
    recoverd : {
        backgroundColor:"rgb(0,255,0,0.5)"
    },
    deaths : {
        backgroundColor:"rgb(255,0,0,0.5)"
    },
    h3 : {
        color:"white"
    }
}));
// function getCase(str){
//     return str.charAt(0).toLocaleUpperCase()+str.slice(1)
// }


export default function InfoPanel() {
    const [globalData,setGlobalData]=useState({})
    const [isData,setData]=useState(true)
    useEffect(()=>{
      async function getData(){
        const response= await fetch("https://disease.sh/v3/covid-19/all")
        let data = await response.json();
        setGlobalData(data)
        setData(false);
        console.log(data);
       
      }
      getData();
    },[])
    const classes = useStyles();  
    if (isData){
        return <div>
            <h1>Loading data....</h1>
        </div>
    }
    // console.log(globalData[Object.keys(globalData[0])])
    // console.log(Object.keys(globalData)[1])
   

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} >
                <Paper className={classes.paper} elevation={3} className={classes.total}>
                    <h3>Total Cases</h3>
                    <h3>{Object.values(globalData)[1]}</h3>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} >
                <Paper className={classes.paper} elevation={3} className={classes.deaths}> 
                    <h3>Deaths</h3>
                    <h3>{Object.values(globalData)[3]}</h3>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} >
                <Paper className={classes.paper} elevation={3} className={classes.recoverd}>
                    <h3>Recovered</h3>
                    <h3>{Object.values(globalData)[5]}</h3>
                    </Paper>
                </Grid>



            {/* {Object.keys(globalData).map((key,ind)=>{
               
                return (
                    <Grid item xs={12} sm={4} key={ind}>
                        <Paper className={classes.paper} elevation={3}>
                           <h3 className={classes.title} >{key} </h3>
                           <h3> <CountUp
                           start={globalData[key]-1000}
                           duration={2.5}
                           separator=","
                           end={globalData[key]} /> </h3>
                           
                        </Paper>
                    </Grid>
                )
            })} */}
            </Grid>
            
            
           
        </div>
    );
}
