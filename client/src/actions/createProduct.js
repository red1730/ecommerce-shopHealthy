import axios from "axios";

export function createProduct(name){
  return async function (dispatch) {
    var json = await axios.post("https://back.dkndrd.com/tresmiluno/admin/crear",name);
    return json;
    }
  }
