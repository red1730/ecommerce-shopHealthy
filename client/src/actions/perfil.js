import axios from "axios";

export function modificarPerfil(name){
  return async function (dispatch) {
    var json = await axios.post("http://localhost:3001/tresmiluno/",name);
    return json;
    }
  }
