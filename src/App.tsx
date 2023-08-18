import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiTypography } from './components/MuiTypography';

import { MuiTextField } from './components/MuiTextField';
import { MuiButton } from './components/MuiButton';

function App() {
  return (
    <div className="App">
        {/*  <MuiTypography/>*/}
      {/* <MuiButton/> */}
      <MuiTextField/>
    </div>
  );
}

export default App;
