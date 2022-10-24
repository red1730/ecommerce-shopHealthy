import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { capitalize } from '@mui/material';

export const OrderSelect = ()=> {

const keys = ['nombre', 'precio'];

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
        <InputLabel id="demo-simple-select-standard-label">Ordenar por:</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        //   value={age}
        //   onChange={handleChange}
          label="Age"
        >

          { keys.map( el => {
            <MenuItem value={el}>{ capitalize(el) }</MenuItem>
          }) }
          
        </Select>
      </FormControl>
      
    </div>
  );
}
