import axios from "axios";

export function editarProducto(data, id){
    console.log('id q recibe el action', id)
  return async function (dispatch) {
    let json = await axios.put(`https://henryhealthy.shop/tresmiluno/producto/admin/${id}`,data);
    console.log(json, 'id q devuelve el back')
    return dispatch({ type:'MODIFICAR_PRODUCTO', payload:json});
    }
  }

