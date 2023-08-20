import { Box, FormControlLabel, Switch, FormControl, FormLabel, FormGroup} from "@mui/material";
import React, { useState } from "react";

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log(checked)
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setChecked(event.target.checked)
}


//MutilpleSwitch

const [checkedMulti, setCheckedMulti] = useState<string[]>([])
    console.log(checkedMulti)
const handleChangeMulti = (event: React.ChangeEvent<HTMLInputElement>) =>{
   
    const index = checkedMulti.indexOf(event.target.value)
   
    if(index === -1 ){
        setCheckedMulti([...checkedMulti, event.target.value])
           
     
      
    }else{
        setCheckedMulti(checkedMulti.filter((check)=> check !== event.target.value))
       
       
    }
}

    return (<Box>

        <Box>

        <FormControlLabel label='Dark mode' control={<Switch checked={checked} onChange={handleChange}/>} />
        </Box>

 
        <Box>

        <FormControl>
                    <FormLabel>Varios switch</FormLabel>

                    <FormGroup row>
                        <FormControlLabel
                            label='switch1'
                            value='switch1'
                            control={<Switch checked={checkedMulti.includes('switch1')} onChange={handleChangeMulti} />}
                        />

                        <FormControlLabel
                            label='switch2'
                            value='switch2'
                            control={<Switch checked={checkedMulti.includes('switch2')} onChange={handleChangeMulti} />}
                        />

                        <FormControlLabel
                            label='switch3'
                            value='switch3'
                            control={<Switch checked={checkedMulti.includes('switch3')} onChange={handleChangeMulti} size="medium" color="secondary"/>}
                        />



                    </FormGroup>

                </FormControl>
        </Box>
       

    </Box>)
}