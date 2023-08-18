import { Stack, TextField, InputAdornment} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { useState } from "react";

export const MuiTextField = () => {

    const [value, setValue] = useState('')
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="name" variant="outlined"></TextField>
          <TextField label="name" variant="filled"></TextField>
          <TextField label="name" variant="standard"></TextField>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Small secondary" size="small" color="secondary"></TextField>
   
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Form Input" required></TextField>
          <TextField label="Password" type="password" helperText='No compartas tu clave' disabled></TextField>
          <TextField label="Read only" InputProps={{readOnly: true}}></TextField>
        </Stack>

        <Stack direction="row" spacing={2}>
        <TextField label="Amount" InputProps={{ startAdornment: <InputAdornment position="start"><SendIcon></SendIcon></InputAdornment>}} ></TextField>
        <TextField label="Weight" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment>}} ></TextField>


        </Stack>


        <Stack direction="row" spacing={2}>
          <TextField label="Error text field" required error={!value} helperText={!value ? 'Required': 'No comportas tu calve'} value={value} onChange={(e)=> setValue(e.target.value)}></TextField>
        
        </Stack>
      </Stack>
    </div>
  );
};
