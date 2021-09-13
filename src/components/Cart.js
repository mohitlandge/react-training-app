import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory, Redirect, History } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from "./CartItem"
import axios from "axios"
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";



function Cart(props) {
    var history = useHistory()
    var [cakes, setCakes] = useState([])
    let [loading, setLoading] = useState(true);
    const color = 'pink';

    // useEffect(() => {
    //     props.dispatch({
    //         type: "GET_CART"
    //     }) 
    // }, [])

    // to get the available cart data

    useEffect((props) => { 
        if (localStorage.token) {
            axios({
                method: "post",
                url: process.env.REACT_APP_BASEAPI + "/cakecart",
                data: {},
                headers: { authtoken: localStorage.token }
            }).then((response) => {
                console.log(response)
                console.log("response from get cakes api", response.data)
                setCakes(response.data.data)
                setLoading(false);
            }, (error) => {
                console.log("error from get api", error)
                setLoading(false);
            })
        } else {
            props.history.push("/login")
        }
    },[])
    
        
    //to remove from the cart

    return (
        <div className="container">
            <br /><br />
            <h5 className="mb-4">Cart (<span>{cakes.length}</span> items)</h5>
            {
                cakes.map((each, index) => {
                    return <CartItem key={index} cake={each} />
                })
            }
            <div className="md-4" >
                <div className=" pt-4">
                <h5 className="mb-3">The total amount of</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>$25.98</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>$53.98</strong></span>
            </li>
          </ul>
          <button type="button" className="btn btn-primary btn-block">go to checkout</button>
        </div>
      </div> 

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