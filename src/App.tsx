import React from 'react';
import logo from './logo.svg';
import './App.css';



import { MuiTypography } from './components/MuiTypography';

import { MuiTextField } from './components/MuiTextField';
import { MuiButton } from './components/MuiButton';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckBox } from './components/MuiCheckBox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRating } from './components/MuiRating';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiBox } from './components/MuiBox';
import { MuiStack } from './components/MuiStack';
import { MuiGrid } from './components/MuiGrid';
import { MuiPaper } from './components/MuiPaper';
import { MuiCard } from './components/MuiCard';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiImageList } from './components/MuiImageList';
import { MuiNavBar } from './components/MuiNavBar';
import { MuiMenu } from './components/MuiMenu';
import { MuiLink } from './components/MuiLink';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';

import { MuiDrawer } from './components/MuiDrawer';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';

import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiList } from './components/MuiList';
import { MuiChip } from './components/MuiChip';
import { MuiToolTip } from './components/MuiToolTip';
import { MuiTable } from './components/MuiTable';
import { MuiAlert } from './components/MuiAlert';
import { MuiSnackbar } from './components/MuiSnackbar';

import { MuiDialog } from './components/MuiDialog';
import { MuiProgress } from './components/MuiProgress';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiLoadingButton } from './components/MuiLoadingButton';
import { MuiTabs } from './components/MuiTabs';
import { MuiTimeline } from './components/MuiTimeline';
import { MuiMasonry } from './components/MuiMasonry';
import { MuiResponsiveness } from './components/MuiResponsiveness';

import { MuiCustomizingTheme } from './components/MuiCustomizingTheme';

import { createTheme, colors, ThemeProvider } from '@mui/material';

const themeCustom = createTheme({
  status:{
    danger: '#e53e3e',
  },
  palette:{
    secondary:{
      main: colors.orange[500],
    },
    neutral:{
      main: colors.grey[500],
      //light:
      darker: colors.grey[700],
     // contracttext

    }
  },

})

function App() {
  return (

    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider theme={themeCustom}>
    <div className="App">
         
        {/*  <MuiTypography/>*/}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckBox/> */}

      {/* <MuiSwitch/> */}

      {/* <MuiRating/> */}

      {/* <MuiAutocomplete/> */}
      {/* <MuiBox/> */}
      {/* <MuiStack/> */}
      
      {/* <MuiGrid/> */}

      {/* <MuiPaper/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordion/> */}
      {/* <MuiImageList/> */}
      {/* <MuiNavBar/> */}
      {/* <MuiMenu/> */}

      {/* <MuiLink/> */}
      {/* <MuiBreadcrumbs/> */}
      {/* <MuiDrawer/> */}

      

      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNavigation/> */}
      {/* <MuiAvatar/> */}
     {/* < MuiBadge/> */}
  
   {/* <MuiList/> */}
   {/* <MuiChip/> */}
   {/* <MuiToolTip/> */}

  {/* < MuiTable/> */}

  {/* <MuiAlert/> */}

  {/* <MuiSnackbar/> */}

  {/* <MuiProgress/> */}


{/* <MuiSkeleton/> */}
{/* <MuiLoadingButton/> */}

{/* <MuiTabs/> */}
{/* <MuiTimeline/> */}
{/* 
<MuiMasonry/> */}
{/* <MuiResponsiveness/> */}
<MuiCustomizingTheme/>

    </div>
    </ThemeProvider>
    // </LocalizationProvider>

  );
}

export default App;
