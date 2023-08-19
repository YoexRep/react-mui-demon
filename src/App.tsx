import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiTypography } from './components/MuiTypography';

import { MuiTextField } from './components/MuiTextField';
import { MuiButton } from './components/MuiButton';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';

function App() {
  return (
    <div className="App">
        {/*  <MuiTypography/>*/}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      <MuiRadioButton/>
    </div>
  );
}

export default App;
