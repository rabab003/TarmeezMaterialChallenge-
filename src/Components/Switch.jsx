import * as React from 'react';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import HelloWorld from './HelloWorld';
import { Box } from '@mui/material';

export default function SwitchC() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    };

  return (
    <>
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> 

    <Box m={2}>
        {checked && <HelloWorld/>}
    </Box> 
    </>

  );
}
