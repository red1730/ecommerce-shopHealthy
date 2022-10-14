
const initialState = {
    products: [],
    allProducts: [],
    isLoading: null,
    eror: null,
}
export const catalogReducer = (state= initialState, action)=>{
    switch (action.type) {
        case 'TEST':
            
            return state;
    
        default:
            return state;
    }
}