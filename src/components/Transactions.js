import React, { useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Context } from "./Context";
import { calculatePoints } from '../utilities/helperFunctions';

function Transactions(){
    const data = useContext(Context);
    return (
        <React.Fragment>
            <h4>All Transactions</h4>
            <TableContainer component={Paper} sx={{height: 400}}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Transaction</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Points</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((row) => (
                    <TableRow
                    key={row.transaction_id}
                    >
                    <TableCell component="th" scope="row">
                        {row.transaction_name}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{calculatePoints(row.amount)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </React.Fragment>
      );
}

export default Transactions;