import { useReducer } from "react";
import { AuthContext } from './AuthContext'
import { authReducer } from "./authReducer";


const initialState = {
  name: "",
  email:'',
  logged: false,
  uid: '',
  adminId: 'cC0kgD9ykQW9o1jZvGH3OPXHuCl2',
  isAdmin:false
};


export const AuthProvider = ({ children }) => {

   const [ authState, dispatch ] = useReducer( authReducer, initialState  )


   return(
    <AuthContext.Provider value ={(children)}>
      { children }
    </AuthContext.Provider>
   )
}