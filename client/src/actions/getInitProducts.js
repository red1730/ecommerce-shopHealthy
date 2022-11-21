import { getAllProducts, getCategorias } from "../helpers/index";
import { orderAsc, orderDesc } from "./order";

export const initProducts = ()=>{
    return async ( dispath, getState )=>{
        const {order, orderKey}= getState().catalogReducer;

        dispath({type: 'FETCH_INIT_PRODUCTS'})
        let cart= []
        try {
            
            cart = JSON.parse ( localStorage.getItem('cart') ) || [];
            
        } catch (error) {
            // console.log('fallo el parse ese')
            cart = []
        }
        try {
            const allProducts = await getAllProducts();
            const categs = await getCategorias(); 
            console.log(categs)
            dispath({
                type: 'SUCCESS_FETCH_INIT_PRODUCTS',
                payload: {data: allProducts, cat: 'All', cart:cart, categorias: categs},
            })
            if(order) dispath(orderAsc(orderKey));
            else dispath(orderDesc(orderKey))
        } catch (error) {
            dispath({
                type: 'ERROR_FETCH_INIT_PRODUCTS',
                payload: error
            })
            console.error(error.message);
        }
    }
}