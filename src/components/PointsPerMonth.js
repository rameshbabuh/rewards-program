import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Context } from "./Context";
import { GetTotalPoints, getMonthName } from '../utilities/helperFunctions';

function PointsPerMonth(){
    const data = useContext(Context);
    
    //grouping the data array by month
    const groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
            (rv[x[key].substring(3,5)] = rv[x[key].substring(3,5)] || []).push(x);
            return rv;
        }, {});
    };
    
    const groupedArr = groupBy(data, 'date');
    let pointsByMonthArr = [];
    //forming an array to populate points per month
    for (let [key, value] of Object.entries(groupedArr)) {
        debugger;
        pointsByMonthArr.push(
            {"month": key, "points": GetTotalPoints(value)}
        );
    }

    return (
        <React.Fragment>
            <h4>Points Per Month</h4>
            <TableContainer component={Paper} sx={{marginBottom: "20px"}}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell align="right">Points</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {pointsByMonthArr.map((row, idx) => (
                    <TableRow
                    key={idx}
                    >
                    <TableCell component="th" scope="row">
                        {getMonthName(row.month)}
                    </TableCell>
                    <TableCell align="right">{row.points}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </React.Fragment>
      );
}

export default PointsPerMonth;