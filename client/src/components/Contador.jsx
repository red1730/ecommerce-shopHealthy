import { Button, Grid, TextField, Typography, Box} from "@mui/material";
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InputAdornment from '@mui/material/InputAdornment';

export const Contador = () => {

    const [count, setCount] = useState(1);
    const handleChange = e =>{
        console.log(e.target.value)
        if(e.target.value >=0)setCount(e.target.value)
    }
  return (
    <Box sx={{width:'200px'}} >
    
    <Grid container spacing={0} x={{justifyContent:'center', alingItems:'center',}} >
        <Grid item xs={4} sx={{justifyContent:'center'}}>
            <Button onClick={() => (parseInt(count) > 1) && setCount(parseInt(count) - 1)} sx={{textAlign:'center'}} >
            <RemoveIcon/>
            </Button>
        </Grid>
        <Grid item xs={4} x={{ textAlign:'center', alignItems:'center', justifyContent:'center', display:'flex'}}>
            <TextField
                sx={{width:1, textAlign:'center', alignItems:'center', padding:0,}}
                hiddenLabel
                id="filled-hidden-label-small"
                variant="outlined"
                size="small"
                placeholder='0'
                value={count}
                InputProps={{
                    // endAdornment: <InputAdornment position="start">u.</InputAdornment>,
                    inputProps: { 
                        max: 100, min: 0,
                        
                    },
                    sx: {
                        "& input": {
                            textAlign: "center"
                        }
                    }
                }}
                onChange={handleChange}
                
                
            />
            
        </Grid>
        <Grid item xs={4}>
            <Button onClick={() => setCount(parseInt(count) + 1)} sx={{textAlign:'center'}}>
            <AddIcon/>
            </Button>
        </Grid>
        <Button variant="outlined" sx={{margin:"15px auto",width:'300px'}} startIcon={<AddShoppingCartIcon />}>
            <Typography sx={{fontSize:13.5}} >Agregar al carrito</Typography>
        </Button>
    </Grid>
    </Box>
  )
}
