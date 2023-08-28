import { Stack, CircularProgress, LinearProgress } from '@mui/material'
import { useState} from 'react'
import * as React from 'react';
export const MuiProgress = () => {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);



  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color='success' />
      <CircularProgress variant='determinate' value={60} />
      <LinearProgress />
      <LinearProgress color='success' />
      <LinearProgress variant='determinate' value={60} />
      <LinearProgress variant='determinate' value={progress} />
    </Stack>
  )
}