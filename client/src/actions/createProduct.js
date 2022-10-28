import axios from "axios";

export function createProduct (name){
  return async function (dispatch) {
    var json = await axios.post("http://localhost:3001/tresmiluno/admin/crear",name);
    return json;
    }
  }
