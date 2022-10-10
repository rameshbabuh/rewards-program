import { React, useState, useEffect, useContext } from "react";
import Box from '@mui/material/Box';
import { Context } from "./Context";
import { GetTotalPoints } from "../utilities/helperFunctions";

function TotalPointsEarned(){
    const [points, setPoint] = useState(0);
    const data = useContext(Context);

    var totalPoints = GetTotalPoints(data);

    useEffect(()=>{
        if(totalPoints > 0){
            setPoint(totalPoints);
        }
    }, [totalPoints])

    return(
        <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          marginBottom: "20px",
          textAlign: 'center'
        }}
      >
          Total Points Earned: {points}
        </Box>
    )

}

export default TotalPointsEarned;