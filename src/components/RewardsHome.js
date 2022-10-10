import {React, useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import { Context } from "./Context.js";
import Transactions from "./Transactions";
import TotalPointsEarned from "./TotalPointsEarned";
import PointsPerMonth from "./PointsPerMonth";
import { readData } from '../utilities/helperFunctions';

function RewardsHome(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        readData().then((data)=>{
            setData(data);
        })
    },[])

    return(
        <Container>
            <Context.Provider value={data}>
                <TotalPointsEarned/>
                <PointsPerMonth/>
                <Transactions/>
            </Context.Provider>
        </Container>
    )
}

export default RewardsHome;