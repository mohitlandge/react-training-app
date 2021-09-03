import axios from "axios";
import CakePage from "./CakePage";
import { Link } from "react-router-dom";

var cakestyle = {
    width: "20rem",
    padding: "20px",
    margin: "10px",
    boxShadow : "5px 5px #888888",
}



function Cake(props) {
    return (
        <div className="">
        <div className="card" style={ cakestyle }>
        <Link to={"/cake/"+props.cake.cakeid}><img style={{ height:"250px"}} className="card-img-top" src={props.cake.image} alt="Card image cap" /></Link>
                <div className="card-body">
                    <h5 style={{ color: "black", textAlign: "center" }} className="card-title">{props.cake.name}</h5>
                    <p style={{ textAlign: "center" }}><b>Price : {props.cake.price}</b> &#x20B9;</p>
                    <button className="btn btn-primary" style={{ textAlign: "left" }}>Add to cart</button>
                    <Link to={"/cake/"+props.cake.cakeid}> <button className="btn btn-primary">Cake Details</button></Link>
            </div>
        </div>
    </div>
    )
}

export default Cake