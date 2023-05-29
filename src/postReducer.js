export const INITIAL_STATES={
    loading:false,
    post:{},
    error:false

}
export const postReducer = (state, action)=>{
    switch(action.type){
        case "FETCH_START":
            return {
                loading:true,
                error:false,
                post:{}
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading:false,
                
                post:action.payload
            };
        case "FETCH_ERROR":
            return{
                loading:false,
                error:true,
                post:{}
            };   
        default:
            return state     
    }   
}