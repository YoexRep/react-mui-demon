import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { Home } from './BottomNavigationPage/Home';
import { Favorities } from './BottomNavigationPage/Favorites';
import { Profile } from './BottomNavigationPage/Profile';

export const MuiBottomNavigation = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: any) => {

        setValue(newValue)
        
    }

    return (
    
        <BottomNavigation  sx={{ width: '100%', position: 'absolute', bottom: 0 }} onChange={handleChange} value={value} showLabels>
       
            

            <BottomNavigationAction
        component={Link}
        to="/Home"
        label="Home"
        icon={<HomeIcon />}      
    />
       
       <BottomNavigationAction
        component={Link}
        to="/MuiButton"
        label="Favorites"
        icon={<FavoriteIcon />}      
    />

<BottomNavigationAction
        component={Link}
        to="/Profile"
        label="Profile"
        icon={<PersonIcon />}      
    />
      
         
       
    </BottomNavigation>
    
    )
}