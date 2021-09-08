import { connect } from 'react-redux';
import CartItem from "./CartItem"
import { useEffect, useState } from "react"
import axios from "axios"
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";



function Cart(props) {
    // let [loading, setLoading] = useState(true);
    let [Cakes, setCakes] = useState([]);
    const color = 'pink';

    useEffect(() => {
        props.dispatch({
            type: "GET_CART"
        }) 
    }, [])

    // to get the available cart data
    // if (localStorage.token) {
    //     axios({
    //         method: "post",
    //         url: process.env.REACT_APP_BASEAPI + "/cakecart",
    //         data: {},
    //         headers: {authtoken: localStorage.token}
    //     }).then((response) => {
    //         setCakes(response.data.data)
    //     }, (error) => {
    //         console.log('error from api', error)  
    //     }) 
    // } else {
    //     props.history.push("/login")
    // }
    //to remove from the cart

    return (
        <div className="container">
            Cart
            {/* {
                Cakes.map((each,index)=>{
                    return <CartItem kay={index} cake={each} />
                })
            } */}
        </div>
    )
}

// export default Cart
export default connect(function (state, props) {
    console.log('state of cart component synched with the state of store', state)
    return {
        cartitmes : state['cartitmes'] || []
    }
})(Cart)