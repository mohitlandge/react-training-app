import React, { Component } from 'react';
import axios from "axios";
import CakePage from "./CakePage";
import { Link, useHistory, History } from "react-router-dom";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { css } from "@emotion/react";

var cakestyle = {
    width: "20rem",
    padding: "20px",
    margin: "10px",
    boxShadow: "5px 5px #888888",
}





function cartItem(props) {
  
  console.log(props);
  let cakeid = props.cake.cakeid
  let name = props.cake.name
  let price = props.cake.price
  let weight = props.cake.weight
  let image = props.cake.image
  let quantity = props.cake.quantity
  let total_price = props.cake.price * props.cake.quantity;
  const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#000000");
    let [Qty, setQty] = useState(quantity);
    var history = useHistory()

  function increaseQty(cakeid) {
    setLoading(true);
    var qty = document.getElementById("qty").value;
    setQty(quantity);
    if (localStorage.token) {
      axios({
          method: "post",
          url: process.env.REACT_APP_BASEAPI + "/addcaketocart",
          data: {cakeid, name, price, weight},
          headers: { authtoken: localStorage.token }
      }).then((response) => {
          console.log(response)
          console.log("response from increase qty of cakes in the cart ", response.data)
        // history.push("/cart")
        window.location.reload();
        setLoading(false);
        
      }, (error) => {
          console.log("error from remove cakes from cart api", error)
      })
  } else {
      history.push("/login")
      setLoading(false);
  }
    }

  
  function descreaseQty(cakeid) {
    setLoading(true);
    var qty = document.getElementById("qty").value;

    if (localStorage.token) {
      axios({
          method: "post",
          url: process.env.REACT_APP_BASEAPI + "/removeonecakefromcart",
          data: {cakeid},
          headers: { authtoken: localStorage.token }
      }).then((response) => {
          console.log(response)
          console.log("response from increase qty of cakes in the cart ", response.data)
        // history.push("/cart")
        window.location.reload();
        setLoading(false);
      }, (error) => {
          console.log("error from remove cakes from cart api", error)
      })
  } else {
      history.push("/login")
      setLoading(false);
  }

    }

  function removeCakeFromcart(cakeid) {
    
    if (localStorage.token) {
      setLoading(true);
          axios({
              method: "post",
              url: process.env.REACT_APP_BASEAPI + "/removecakefromcart",
              data: {cakeid:cakeid},
              headers: { authtoken: localStorage.token }
          }).then((response) => {
              console.log(response)
              console.log("response from remove cakes from cart api", response.data)
            // history.push("/cart")
            window.location.reload();
            setLoading(false);
          }, (error) => {
              console.log("error from remove cakes from cart api", error)
          })
      } else {
        history.push("/login")
        setLoading(false);
      }
    }

    return (
        <div className="">
            <section>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <div className="pt-4 wish-list">

                                <div className="row mb-4">
                                    <div className="col-md-5 col-lg-3 col-xl-3">
                                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                            <img className="img-fluid w-100" src={props.cake.image} alt="Sample" />
                                            <a href="#!">
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-lg-9 col-xl-9">
                                        <div>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h4>{props.cake.name}</h4>
                                                    <p className="mb-3 text-muted text-uppercase small">Price Per Item :<b> {props.cake.price} ₹</b></p>
                                                    <p className="mb-2 text-muted text-uppercase small">Weight: <b> {props.cake.weight} Kg</b></p>
                                                </div>
                                                <div>
                                                    <div className="def-number-input number-input safari_only mb-0 w-100">
                                                        Quantity :
                                                        <button onClick={() => increaseQty(props.cake.cakeid)} >&#43;</button>
                                                          <input defaultValue={ quantity } className="quantity" min="0" name="quantity" id="qty" type="number" />
                                                          {/* <p></p> */}
                                                        <button onClick={() => descreaseQty(props.cake.cakeid)}>&#8722;</button>
                                                    </div>
                                                    <small id="passwordHelpBlock" className="form-text text-muted text-center">
                                                        (Note, 1 piece)
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <a href="#" onClick={() => removeCakeFromcart(props.cake.cakeid)} type="button" className="card-link-secondary small text-uppercase mr-3"><i
                                                        className="fas fa-trash-alt mr-1"></i> Remove item </a>
                                                </div>
                                                <p className="mb-0"><span><strong id="summary">{total_price} ₹</strong></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                {/* <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
            items to your cart does not mean booking them.</p> */}

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">

                        {/* <div className="mb-3">
        <div className="pt-4">

          <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">
            Add a discount code (optional)
            <span><i className="fas fa-chevron-down pt-1"></i></span>
          </a>

          <div className="collapse" id="collapseExample">
            <div className="mt-3">
              <div className="md-form md-outline mb-0">
                <input type="text" id="discount-code" className="form-control font-weight-light"
                  placeholder="Enter discount code" />
              </div>
            </div>
          </div>
        </div>
      </div> */}


                    </div>


                </div>


            </section>
        </div>
    )
}

{/* // export default withRouter(Cake) */ }

export default cartItem

// export default connect(function (state,props) {
//     return {
//     cartItemList: state.cartItemList
//     }
// })(CartItem)