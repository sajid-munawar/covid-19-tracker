import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: "0 auto",
        marginTop: 50,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
function getCase(str){
    return str.charAt(0).toLocaleUpperCase()+str.slice(1)
}


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

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            {Object.keys(globalData).map((key,ind)=>{
               
                return (
                    <Grid item xs={12} sm={4} key={ind}>
                        <Paper className={classes.paper} elevation={3}>
                           <h3>{getCase(key)}</h3>
                           <h3> <CountUp
                           start={globalData[key]-1000}
                           duration={2.5}
                           separator=","
                           end={globalData[key]} /> </h3>
                           <h3>{globalData[key]}</h3>
                        </Paper>
                    </Grid>
                )
            })}
            </Grid>
            
            
           
        </div>
    );
}
