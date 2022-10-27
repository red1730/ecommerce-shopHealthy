import * as React from 'react';
import { styled, } from '@mui/material/styles';
import { Autocomplete, IconButton, TextField, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { generalSearch } from '../actions/search';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor:'white',
  opacity: '90%',
  borderRadius: theme.shape.borderRadius,
  boxshadow: "0px 3px 10px -2px rgb(0 0 0 / 30%)",
  '&:hover': {
    backgroundColor: 'white',
    opacity:'100%'
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: '300px',
  height:'35px',
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
    const handleClickButton = (e) =>{
      // e.preventDefault();
      if(search.length > 1)dispatch(generalSearch(search))

    }

  return (
    <Toolbar sx={{display:'flex', justifyContent:'end', alingItems:'center', bgcolor:'transparent', my:{xs:0, sm:0,  md:-1.7,} }} >
      <Search >
          <Autocomplete
            freeSolo
            variant=''
            id="searchBar-ecomerce"
            disableClearable
            value={search}
            options={allProducts.map( el => `${el.nombre} de -> ${el.marcaId.nombre} #${el.id}`.toLocaleUpperCase())}
            onInputChange={hadleInputChange}
            onChange={handleChangeAutoComplete}
            renderInput={(params) => (
              <TextField
                onSubmit={handleClickButton}
                placeholder='Buscar'
                sx={{ 
                  border: 'transparent', 
                  fontSize:'0.5rem',
                  '& input': {
                    height:2,
                    margin:0,
                    padding:0,  
                    color: (theme) =>
                      theme.palette.getContrastText(theme.palette.background.paper),
                  },
                  }}
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  boxshadow:'0px 2px 4px -1px rgb(0 0 0 / 20%)',

                }}
                
              />
            )}
          />
      </Search>
      <IconButton onClick={handleClickButton} sx={{top:"3px"}} >
        <SearchIcon  />
      </IconButton>
    </Toolbar>
  )
}
