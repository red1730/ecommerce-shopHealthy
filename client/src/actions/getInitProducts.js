import { getAllProducts } from "../helpers/index";

export const initProducts = ()=>{

    return async ( dispath)=>{
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
            dispath({
                type: 'SUCCESS_FETCH_INIT_PRODUCTS',
                payload: {data: allProducts, cat: 'All', cart:cart},
            })
        } catch (error) {
            dispath({
                type: 'ERROR_FETCH_INIT_PRODUCTS',
                payload: error
            })
            console.error(error.message);
        }

    }
}