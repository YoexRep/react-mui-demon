import { Drawer, Box, Typography, Button} from "@mui/material";
import { useState } from "react";

export const MuiDrawer = () => {

    const [showPanel, setShowPanel] = useState(false)

    const handlePanel = () =>{
        setShowPanel(true)
    }

    return (
        <>
    <Drawer anchor='left' open={showPanel}  onClose={()=> setShowPanel(false)}>

        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                Side Panel

            </Typography>

        </Box>
        
    </Drawer>
    <Button onClick={handlePanel}>AbrirPanel</Button>
    </>
    )
}