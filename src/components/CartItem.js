import axios from "axios";
import CakePage from "./CakePage";
import { Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router";

var cakestyle = {
    width: "20rem",
    padding: "20px",
    margin: "10px",
    boxShadow : "5px 5px #888888",
}



function cartItem(props) {

    // function showCake() {
    //     var url = '/cake/' + props.cake.cakeid
    //     props.history.push(url)
    // }

    function increaseQty() {
        
    }

    function descreaseQty() {
        
    }

    return (    
    // <div className="">
    //     <div className="card" style={ cakestyle }>
    //     <img style={{ height:"250px"}} className="card-img-top" src={props.cake.image} alt="Card image cap" />
    //             <div className="card-body">
    //                 <h5 style={{ color: "black", textAlign: "center" }} className="card-title">{props.cake.name}</h5>
    //                 <p style={{ textAlign: "center" }}><b>Price : {props.cake.price}</b> &#x20B9;</p>
    //                 <button className="btn btn-primary" style={{ textAlign: "left" }}>Add to cart</button>
    //                 <button className="btn btn-primary">Cake Details</button>
    //         </div>
    //     </div>
    // </div>
        
    <div class="card">
    <div class=" row card-body">
            <div className="col-md-2">
                <img style={{ height:"100"}} className="card-img-top" src={props.cake.image} alt="Card image cap" />        
                </div>
            <div className="col-md-2">
                    <h5 style={{ color: "black", textAlign: "center", justifyContent: "center", paddingTop: "50px" }} className="card-title">{props.cake.name}</h5>
                    <p style={{ textAlign: "center" }}><b>Price : {props.cake.price}</b> &#x20B9;</p>
                </div>
                <div className="col-md-2">
                    
                
            </div>
                
    </div>
  </div>
    )
}

{/* // export default withRouter(Cake) */}

export default cartItem