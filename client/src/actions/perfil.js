import axios from "axios";

export function modificarPerfil(id){
  return async function (dispatch) {
    var json = await axios.put(`https://henryhealthy.shop/tresmiluno//modificar/:${id}`);
    return dispatch({ type:'MODIFICAR_PERFIL', payload:json});
    }
  }
