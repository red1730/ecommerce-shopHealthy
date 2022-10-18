
const initialState = {
    products: [],
    allProducts: [],
    isLoading: null,
    error: null,
}
export const catalogReducer = (state= initialState, action)=>{
    switch (action.type) {
        case 'FETCH_INIT_PRODUCTS':
            return {
                ...state,
                isLoading: true
            };
        case 'SUCCESS_FETCH_INIT_PRODUCTS':
            return{
                ...state,
                products: action.payload,
                allProducts: action.payload,
                isLoading: false
            }
        
        case 'ERROR_FETCH_INIT_PRODUCTS':
            return{
                ...state,
                error: action.payload,
                products:[],
                isLoading: false
            }
        case 'SET_ISLOADING_TRUE':
            return{
                ...state,
                isLoading: true
            }   
        case 'SET_ISLOADING_FALSE':
            return{
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}