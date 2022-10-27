import { useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { orderAsc, orderDesc } from "../actions/order";

export const useOrder = (setPage, jump)=>{
  
  const dispatch = useDispatch();

  const {order, orderKey} = useSelector(s => s.catalogReducer)

  // const [keyToOrder, setKeyToOrder] = useState('nombre');
  // const [order, setOrder] = useState(true);


  const onChangeOrderKey = event => {
    setPage(0+1);
    jump(0+1);
    dispatch({type: 'SET_ORDER_KEY', payload: event.target.value.toLowerCase()})
    if(order){
        dispatch(orderAsc(event.target.value))
    }else{
        dispatch(orderDesc(event.target.value))
    }
  }
  const onChangeFilterType = event =>{
    return true
    setPage(null,1);
  }

  return {
    onChangeFilterType,
    onChangeOrderKey,
  }

}