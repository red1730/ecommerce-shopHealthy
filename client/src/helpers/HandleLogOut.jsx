import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { type } from '../../types/index'
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import React from 'react'

function handleLogOut() {

    const { user,dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const HandleLogout = () => {
        dispatch({ type: type.logout})
        navigate('/catalogo', { 
            replace: true
        })
        }
    
        
    return (
        <div>
            <Button
                onClick={HandleLogout}
                sx={{ my: 2, color: "white", display: "block" }}
                component={RouterLink}
                to="login"
            >
                Logout
            </Button>
        </div>
)
}

export default handleLogOut








