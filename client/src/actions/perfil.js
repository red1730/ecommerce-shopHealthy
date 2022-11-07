import axios from "axios";

export function modificarPerfil(data){
  return async function (dispatch) {
    var json = await axios.put(`https://henryhealthy.shop/tresmiluno/usuario/modificar/${data.dni}`,data);
    return dispatch({ type:'MODIFICAR_PERFIL', payload:json});
    }
  }


