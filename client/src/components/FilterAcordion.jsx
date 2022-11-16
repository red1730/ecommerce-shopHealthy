import * as React from 'react';
import { styled } from '@mui/material/styles';
import{Link as RouterLink, useNavigate} from 'react-router-dom'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useDispatch, useSelector } from 'react-redux';
import {categorias} from '../helpers/categoriasPrueba'
import { addNestedFilter, filterByCateg, removeNestedFilter } from "../actions/filterProductByCateg";
import { Button, capitalize, Checkbox, FormControlLabel, FormGroup, Typography  } from '@mui/material';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // sx={{minWidth:200, maxWidth:200}}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.8rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  maxHeight:10,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  minWidth:300, maxWidth:300, 
  backgroundColor:'#fff'
}));

export const FilterAcordion=({categTitle, id, handleCloseNavMenu})=> {
  const [expanded, setExpanded] = React.useState('');
  const [subCategoria, setSubCategoria] = React.useState([]);
  const [ratioValue, setRatioValue] = React.useState('');
  const [isChecked, setIsChecked] = React.useState({
    'sin tacc': false,
    'sin azucar': false,
    'vegano': false,
    'organico/agroecologico': false
  }); 

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  let categGroup ={
    'TENTACION SALUDABLE':[2,3,4,5,6],
    'alacena saludable':[1,7,8,9,10,11],
    'estilo de vida':[17,18,19,20],
    'bebidas':[12,13,14,15,16]
  }
  let nestedFilter = ['estilo de vida'];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClick = e=>{
    dispatch(filterByCateg(e.target.innerText));
    navigate(`/catalogo`);
    setExpanded(false);
    handleCloseNavMenu(false)
  }
  const handleClickMultiple = e=>{
    if(e.target.checked) dispatch(addNestedFilter(e.target.name))
    else if (!e.target.checked) dispatch(removeNestedFilter(e.target.name))
    
    setIsChecked({
      ...isChecked,
      [e.target.name]: e.target.checked
    });
    handleCloseNavMenu(false)
    
  }

  React.useEffect(() => {
    const getCategs = ()=>{
      let categToShow = []
      for (const categ in categGroup) {
        if (categTitle.toLowerCase() === categ.toLocaleLowerCase()) categToShow = categGroup[categ].map(el=> {
          let index = 0;
          if(categorias.find((ele, i) => {index = i; return ele.id == el})) return {nombre:categorias[index].nombre, id: categorias[index].id}
        });
      }
      setSubCategoria( categToShow );
    }
    getCategs()
  }, [])
  return (
    <div>
          <Accordion expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)} sx={{with:"20"}}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography sx={{fontWeight:600}} >{categTitle}</Typography>
            </AccordionSummary>
            {
            (nestedFilter.find( el => el.toLocaleLowerCase() == categTitle.toLocaleLowerCase()))
                ?
                <div>
            {subCategoria?.map( (el, i)=>(

              <AccordionDetails key={i} >
                <FormGroup key={el.id}>
                            <FormControlLabel 
                              sx={{p:1,my:-1, py:0.3, mr:1, ml:0}} 
                              label={capitalize(el.nombre)} 
                              control={ 
                                  <Checkbox 
                                      checked={isChecked[el.nombre]} 
                                      onChange={handleClickMultiple} 
                                      sx={{fontSize:"0.2rem"}} 
                                      name={el.nombre}
                                  />
                                      
                              } 
                            />
                        </FormGroup>
             </AccordionDetails>
            ))}
            </div>
            :
            <div>
            {subCategoria?.map( (el, i)=>(

              <AccordionDetails key={i} >
                <Button 
                    value={el.nombre.capitalize}
                    onClick={handleClick}
                    key={i}
                    sx={{textDecoration:'none', color:'inherit', my:-0.3, justifyContent:'left'}}
                > 
                <Typography sx={{fontSize:'0.875rem', textAlign:'left', }} >{capitalize(el.nombre)}</Typography> 
                    
                </Button>
             </AccordionDetails>
            ))}
            </div>
              

            }
    
        </Accordion>

    </div>
  );
}
