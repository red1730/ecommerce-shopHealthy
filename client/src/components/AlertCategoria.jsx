import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const ActionAlerts = ({categoria}) => {
  return (
    <Stack sx={{ width: '100%', marginTop:"90px" }} spacing={2}>
      <Alert>{categoria}</Alert>
    </Stack>
  );
}
