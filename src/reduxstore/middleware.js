import axios from "axios"

export var middleware1 = function(state) {
    return function(next){
        return function (action) {
            // alert("coming here first then going to the reducer" + action.type)


            // if (action.type === 'GET_CART') {
            //     axios({
            //         method: "post",
            //         data: {},
            //         url: "https://apifromashu.herokuapp.com/api/cakecart",
            //         headers: {
            //             authtoken:localStorage.token
            //         }
            //     }).then((response) => {
            //         action.payload = response.data.data
            //         next(action)
            //     })
            // }
        }
    }
}