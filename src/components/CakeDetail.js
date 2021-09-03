import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

function CakeDetail(props)
{
    var [cakedetails, setcakedetails] = useState({})
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FFFFFF");

    useEffect(() => {
		axios({
            url: process.env.REACT_APP_BASEAPI + "/cake/" + props.match.params.cakeid,
			method: 'get'
		}).then((response)=>{
			console.log("Cake Details API", response.data.data);
			setcakedetails(response.data.data)
            setLoading(false);
		},(error)=>{
			console.log("Cake Details API Error", error);
		})
    },[])

    return (
        <div>
           {loading ? <GridLoader color={color} loading={loading} css={override} size={15} /> :
            <div class="container-fluid px-sm-1 py-5 mx-auto">
                <div class="row justify-content-center">
                    <div class="d-flex">
                        <div class="card card-1">
                            <div class="pr-3 row justify-content-end">
                                <div class="fa fa-heart-o like"></div>
                            </div>
                            <div class="product-pic"> <img class="pic1" src={cakedetails.image} /> </div>
                            <div style={{textAlign: "center", marginTop:"10px"}}>
                                <h3 class="product-name">{cakedetails.name}</h3>
                            </div>
                            <p class="category">{cakedetails.description}</p>
                            <div class="row px-3 justify-content-between">
                                <p class="price"><b>Price:</b> ₹{cakedetails.price}</p>
                                <p class="price"><b>Weight:</b>{cakedetails.weight}Kg</p>
                                <div class="stars">{cakedetails.ratings}
                                 <span class="fa fa-star star-active"></span> 
                                 <span class="fa fa-star star-active"></span> 
                                 <span class="fa fa-star star-active"></span> 
                                 <span class="fa fa-star-o"></span> 
                                 <span class="fa fa-star-o"></span> 
                                </div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <Link to="/cart"> <button className="btn btn-primary addtocart">Add to Cart</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> }       
        </div>
    )
}
export default CakeDetail