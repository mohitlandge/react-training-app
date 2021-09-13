export function Reducer1(state={
    samsung:0,
    isLoggedIn: localStorage.token ? true : false,
    isFetching :false,
}, action){
    switch(action.type){
        case "LOGIN" :{
            state = {...state}
            state.isLoggedIn = true
            return state
           // here it will modify and return the state 
        }
        case "invalidtoken":{
            state={...state}
            state.isLoggedIn = false
            localStorage.clear()
            return state
        }
        case "userdata" :{
            state={...state}
            state.user = action.payload
            return state
        }
        case "GET_CART" :{
            state={...state}
            state.cartitmes = action.payload
            return state
        }
        case "GET_CART_FETCH" :{
            state = {...state}
            state["isFetching"] = true
            return state
        }

        case "GET_CART_SUCCESS" :{
            state={...state}
            state["isFetching"] = false
            state.cartitems = action.payload
            return state
        }

        case "GET_CART_FAILURE" :{
            state = {...state}
            state["isFetching"] = false
            state["error"] = "Internal Server Error"
            return state
        }
            
        //added by mohit
        case "cartItemList" :{
            state = {...state}
            state["cartItemList"] = false
            state["error"] = "Internal Server Error"
            return state
        }
        default : return state
    }

}