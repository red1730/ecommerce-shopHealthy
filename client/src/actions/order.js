export const orderDesc = key => (dispatch, getState)=>{
    const {allProducts, products} = getState().catalogReducer;

    const orderedAllProducts = allProducts.sort( (a,b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
    const orderedProducts = products.sort( (a,b) => a[key]< b[key]? 1 : a[key] > b[key]? -1: 0);
    dispatch({type:'SET_ORDER', payload: false})
    dispatch({type: 'ORDER_DESC', payload: {orderedProducts, orderedAllProducts, }})
}
export const orderAsc = key => (dispatch, getState)=>{
    const {allProducts, products} = getState().catalogReducer;

    const orderedAllProducts = allProducts.sort( (b,a) => a[key]> b[key]? 1 : a[key] < b[key]? -1: 0);
    const orderedProducts = products.sort( (b,a) => a[key]< b[key]? 1 : a[key] > b[key]? -1: 0);
    dispatch({type:'SET_ORDER', payload: true})
    dispatch({type: 'ORDER_ASC', payload: {orderedProducts, orderedAllProducts }})
}