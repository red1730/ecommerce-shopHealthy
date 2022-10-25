import { useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { orderAsc, orderDesc } from "../actions/order";

export const useOrder = (setCurrentPage, defaultKey)=>{
  
  const dispatch = useDispatch();

  const {order, orderKey} = useSelector(s => s.catalogReducer)

  // const [keyToOrder, setKeyToOrder] = useState('nombre');
  // const [order, setOrder] = useState(true);


  const onChangeOrderKey = event => {
    if(order){
        dispatch(orderAsc(event.target.value))
    }else{
        dispatch(orderDesc(event.target.value))
    }
    dispatch({type: 'SET_ORDER_KEY', payload: event.target.value})
    setCurrentPage(1);
  }
  const onChangeFilterType = event =>{
    return true
    setCurrentPage(1);
  }

  return {
    onChangeFilterType,
    onChangeOrderKey,
  }

}