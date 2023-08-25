import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar, ListItemButton, Divider} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail'

export const MuiList = () => {
    return (
    
    <Box sx={{width: '400px', bgcolor: '#efefef'}}>

        <List>

            <ListItem disablePadding>
                <ListItemButton>
                
                <ListItemIcon>
                    
                    <ListItemAvatar>
                        <Avatar>
                     <MailIcon/>
                     </Avatar>
                     </ListItemAvatar>
                     </ListItemIcon>
                <ListItemText primary='List Item 1' secondary='mas texto'/>
                
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemIcon>

            <ListItemAvatar>
                        <Avatar>
                     <MailIcon/>
                     </Avatar>
                     </ListItemAvatar>



            </ListItemIcon>
                <ListItemText primary='List Item 2'/>
                

            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemIcon>       <ListItemAvatar>
                        <Avatar>
                     <MailIcon/>
                     </Avatar>
                     </ListItemAvatar>
</ListItemIcon>
                <ListItemText primary='List Item 3'/>
                

            </ListItem>
        </List>


        
    </Box>
    
    )
}