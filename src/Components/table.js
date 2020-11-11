import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    recovered: {
        backgroundColor : "rgb(0,255,0,0.5)"
    },
    deaths: {
        backgroundColor:"rgb(255,0,0,0.5)"
    },
    total : {
        backgroundColor:"rgb(0,0,255,0.5)"
    },
    active:{
        backgroundColor:"rgb(255, 226, 62, 0.911)"
    }
});
function CountryTable() {
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




    const classes = useStyles();
    return (
        <div>


            <TableContainer >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell >Country</TableCell>
                            <TableCell >Active</TableCell>
                            <TableCell >Total Cases</TableCell>
                            <TableCell >Deaths</TableCell>
                            <TableCell >Recovered</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {globalData.map((data) => (
                            <TableRow >
                                <TableCell >{data.country}</TableCell>
                                <TableCell className={classes.active} >{data.active}</TableCell>
                                <TableCell className={classes.total}>{data.cases}</TableCell>
                                <TableCell className={classes.deaths}>{data.deaths}</TableCell>
                                <TableCell className={classes.recovered}>{data.recovered}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>





    )
}
export default CountryTable;
