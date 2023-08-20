import { Stack, Rating} from "@mui/material";
import React, { useState } from "react";
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';
import BoyIcon from '@mui/icons-material/Boy';

export const MuiRating = () => {


    const [value, setvalue ] = useState<number | null>(3)

    console.log({value})
    const handleChange= (_event:  React.ChangeEvent<{}>, newValue: number | null) =>{
            setvalue(newValue)
    }

    return (<Stack spacing={2}>
        <Rating  value={value} 
        onChange={handleChange} 
        precision={0.5} 
        icon={<BoyOutlinedIcon fontSize="inherit" color="error"/>} emptyIcon={<BoyIcon fontSize="inherit"/>}
        
       highlightSelectedOnly
        
        />
    
    </Stack>)
}