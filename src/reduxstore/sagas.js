import {all , takeEvery , put, call} from "redux-saga/effects"
import axios from "axios"

 function *CartGenerator(action){
    console.log(">>>>>>>>>>>>>>>>>>>>>>" , action)
    yield put({
        type:"GET_CART_FETCH"
    })
   try {
    var result  =  yield axios({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api/cakecart1",
        data:{},
        headers:{
            authtoken:localStorage.token
        }
    })
   }
   catch(error){
        console.log("error in making axios call" , error)
   }
   

    if(result?.data?.data)
    yield put({
        type:"GET_CART_SUCCESS",
        payload:result.data.data
    })
    else{
        yield put({
            type:"GET_CART_FAILURE"
        })
    }
}

function *CartSaga(){
    console.log("........")
  yield takeEvery('GET_CART' , CartGenerator)
}

export function *RootSaga(){
    console.log("................ in root saga")
   yield all([CartSaga()])
}