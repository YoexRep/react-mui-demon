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

function App() {
  return (
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
      <MuiBox/>
    </div>
  );
}

export default App;
