import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";

import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import { MouseEvent, useState } from "react";
export const MuiSpeedDial = () => {


        const [tipOpcion, setTipOpcion] = useState<string | null>(null)
    console.log({tipOpcion})
    const handleClic = (opcion: React.MouseEvent<HTMLElement>)=>{
           // setTipOpcion(opcion.target.)
        }




    return (
    
    <SpeedDial ariaLabel="Navigation speed dial" 
    sx={{position: 'absolute', bottom: 16, right: 16}} 
    
    icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
    
    >
        <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' tooltipOpen  onClick={handleClic}/>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' tooltipOpen/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share' tooltipOpen/>

        
    </SpeedDial>
    
    )
}