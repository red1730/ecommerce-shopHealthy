import * as React from 'react';
import { styled, } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, capitalize, IconButton, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { generalSearch } from '../actions/search';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  margin:0,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: '300px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: '500px',
  },
}));



export const SearchBar = ()=> {
    const {allProducts} = useSelector(state => state.catalogReducer);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hadleInputChange = e =>{
      e.target.value && setSearch(e.target.value)
    }
    const handleChangeAutoComplete = e =>{
      const id = e.target.innerHTML.match(/(#[\d]+)/g).join().slice(1);
      navigate(`/catalogo/${id}`)
      
    }
    const handleClickButton = () =>{
      if(search.length > 3)dispatch(generalSearch(search))

    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{top:{xs:55, md:68}, height:75, alignItems:'center', justifyContent:'center', color:'secondary' }}>
        <Toolbar  >
          <Search >
             <Autocomplete
                freeSolo
                id="searchBar-ecomerce"
                disableClearable
                sx={{paddingLeft:0, }}
                value={search}
                options={allProducts.map( el => `${el.nombre} de -> ${el.marcaId.nombre} #${el.id}`.toLocaleUpperCase())}
                onInputChange={hadleInputChange}
                onChange={handleChangeAutoComplete}
                renderInput={(params) => (
                  <TextField
                    sx={{ border: 'transparent', }}
                    {...params}
                    
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                    
                  />
                )}
              />
          </Search>
          <IconButton onClick={handleClickButton}>
            <SearchIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
