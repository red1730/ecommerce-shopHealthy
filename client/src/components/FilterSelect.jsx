import queryString from 'query-string';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {categorias} from '../helpers/categoriasPrueba'
import { useDispatch, useSelector } from 'react-redux';
import { filterByCateg } from '../actions/filterProductByCateg';
import {  useLocation, useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useEffect } from 'react';
import ListItemText from '@mui/material/ListItemText';



const StyledSelect = styled(Select)(({ theme }) => ({
    border: 'none',
    color: 'white',
    marginTop: 11,
    backgroundColor:'none',
    "&:hover":{
    backgroundColor:'none',
    border:'none',
    },
    "&::before":{
    backgroundColor:'none',
    border:'none',
    },
    "&::after":{
    backgroundColor:'none',
    border:'none',
    }

  }));

  const ITEM_HEIGHT = 60;
  const ITEM_PADDING_TOP = 0;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

export const FilterSelect = ({categTitle})=> {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );
  const dispatch = useDispatch();

  let categGroup ={
    'TENTACION SALUDABLE':[2,3,4,5,6],
    'alacena saludable':[1,7,8,9,10,11],
    'estilo de vida':[17,18,19,20],
    'bebidas':[12,13,14,15,16]
  }
  let nestedFilter = ['estilo de vida'];

  const [categoriaCheckBox, setCategoriaCheckBox] = useState([categTitle]);
  const [categoria, setCategoria] = useState(categTitle);
  const [subCategoria, setSubCategoria] = useState([]);
  
  useEffect(() => {
    const getCategs = ()=>{
      let categToShow = []
      for (const categ in categGroup) {
        if (categTitle.toLowerCase() === categ.toLocaleLowerCase()) categToShow = categGroup[categ].map(el=> {
          let index = 0;
          if(categorias.find((ele, i) => {index = i; return ele.id == el})) return {nombre:categorias[index].nombre, id: categorias[index].id}
        });;
      }
      setSubCategoria( categToShow );
    }
    getCategs()
  }, [])
  
  
  const handleChange = (event) => {
    if (event.target.value.toLocaleLowerCase() !== categTitle.toLocaleLowerCase()) dispatch(filterByCateg(event.target.value));
    navigate(`/catalogo`);
    setCategoria(event.target.value);
    setCategoria(categTitle)
  };
  const {categ}=useSelector(s=> s.catalogReducer)
  const handleChangeMultiple = (event) => {
    const {
      target: { value },
    } = event;
    setCategoriaCheckBox(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(event.target.value);
    console.log(categoriaCheckBox)
    // if (event.target.value.toLocaleLowerCase() !== categTitle.toLocaleLowerCase()) dispatch(filterByCateg(event.target.value));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        {
          (nestedFilter.find( el => el.toLocaleLowerCase() !== categTitle.toLocaleLowerCase()))
                ?
            <StyledSelect
              value={categoria}
              onChange={handleChange}
              variant='standard'
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={categTitle}>
                <Typography 
                          textAlign="center"                    
                          sx={{textDecoration:'none', color:'inherit', fontSize:'0.875rem'}}
                          >{categTitle}</Typography>
              </MenuItem>
              {
                subCategoria?.map( el=> (<MenuItem  key={el.id} value={el.nombre}>
                  <Typography 
                    textAlign="center"                    
                    sx={{textDecoration:'none', color:'inherit', fontSize:'0.875rem'}}
                    >{el.nombre.toUpperCase()}
                  </Typography>
                </MenuItem>))
              }
            </StyledSelect>
                :
            <StyledSelect
              variant='standard'
              multiple
              value={categoriaCheckBox}
              sx={{fontSize:"0.875rem"}}
              defaultValue={categTitle}
              renderValue={() => categTitle}
              onChange={handleChangeMultiple}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={categTitle} disabled >
                <Typography 
                    textAlign="center"                    
                    sx={{textDecoration:'none', color:'inherit', fontSize:'0.875rem'}}
                    >{categTitle}</Typography>
              </MenuItem>
            {subCategoria?.map(el => (
              <MenuItem key={el.id} value={el.nombre} onChange={e=>console.log(e)} >
                <Checkbox checked={categoriaCheckBox.indexOf(el.nombre) > -1} />
                <ListItemText primary={el.nombre} />
              </MenuItem>
            ))}
          </StyledSelect>


        }
        
      </FormControl>
    </div>
  );
}
