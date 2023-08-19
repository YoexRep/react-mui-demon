import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderLinedIcon from '@mui/icons-material/FormatUnderlined';

import { useState } from "react";
import { format } from "path";

export const MuiButton = () => {

  const [formats, setFormats] = useState<string[]>([])

  console.log({formats,} )

  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) =>{
    setFormats(updatedFormats)
  }

  return (
    <Stack spacing={4}>

              {/*Variant Button */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          texto
        </Button>
        <Button variant="contained">Contained este</Button>
        <Button variant="outlined">Outlined este otro</Button>
      </Stack>

        {/*Color Button */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

        {/*Size Button */}
      <Stack display='block' spacing={2} direction='row'>
      <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>

      

      </Stack>

      <Stack  spacing={2} direction='row'>
 

        <Button variant="contained" startIcon={<SendIcon/> } disableRipple onClick={()=> alert('Hola mundo')}>SEND</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation>SEND</Button>
        <Button variant="contained" startIcon={<BeachAccessIcon/>} disableElevation>Beach</Button>

        

        <IconButton aria-label="send" color='success' size='large'>
            <SendIcon></SendIcon>

        </IconButton>

      </Stack>

        {/*Group Button */}
      <Stack direction='row'>
        <ButtonGroup variant="contained" orientation="vertical" size='large' color='secondary' aria-label='aligment button gruop'>
        <Button onClick={()=> alert('Soy el left')} >
          left
        </Button>
        <Button onClick={()=> alert('Soy el center')}>
          center
        </Button>
        <Button onClick={()=> alert('Soy el right')}>
          Right
        </Button>


        </ButtonGroup>
  

      </Stack>

         {/*Toggle Button */}
         <Stack direction='row'>
        <ToggleButtonGroup  aria-label='text formatting' value={formats} onChange={handleFormatChange} size="medium" color="success" orientation="vertical" exclusive> 
       
          <ToggleButton value='bold' aria-label='bold'> <FormatBoldIcon></FormatBoldIcon></ToggleButton>
          <ToggleButton value='Italic' aria-label='italic'> <FormatItalicIcon></FormatItalicIcon></ToggleButton>
          <ToggleButton value='UnderLined' aria-label='underlined'> <FormatUnderLinedIcon></FormatUnderLinedIcon></ToggleButton>

        </ToggleButtonGroup>
  

      </Stack>

    </Stack>
  );
};
