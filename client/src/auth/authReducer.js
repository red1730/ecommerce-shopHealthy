import { type } from "../../types/index"

const initialState = {
  name: "user",
  email:'',
  logged: false,
  uid: '',
  adminId: 'cC0kgD9ykQW9o1jZvGH3OPXHuCl2',
  isAdmin:false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case type.login:
      return {
        ...state,
        nombre: action.payload.nombre? action.payload.nombre : 'user' ,
        logged: true,
        email: action.payload.email,
        uid: action.payload.uid,
        isAdmin: (state.adminId === action.payload.uid)?true:false,
      };

    case type.logout:
      return {
        name: "",
        email:'',
        logged: false,
        uid: '',
        adminId: 'cC0kgD9ykQW9o1jZvGH3OPXHuCl2',
        isAdmin:false
      };
    

    default:
      return state;
  }
};
