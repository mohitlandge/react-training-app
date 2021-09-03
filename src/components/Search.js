import { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cake from "./Cake"
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";


function Search() {

let [cakes, setCakes] = useState([]);
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
let [loading, setLoading] = useState(true);
let [color, setColor] = useState("#FFFFFF");

    useEffect(()=>{
        axios({
            url: process.env.REACT_APP_BASEAPI+"/searchcakes?q=choco",
            method: 'get'
        }).then((response)=>{
            console.log("response here", response.data.data);
            setCakes(response.data.data);
            console.log(cakes)
            setLoading(false);
        },(error)=>{
            console.log("error", error);
        })
    }, [])
    
    return (
        <div>
            <GridLoader color={color} loading={loading} style={override} size={15} />
                { cakes?.map((cake,index) =>( 
                <div className="card hvimg"  key={index}>
                    <Link to={"/cake/"+cake.cakeid}> <img className="card-img-top hvimg1" src={cake.image} alt="Card image cap"/> </Link>
                <div className="card-body">
                    <h5 className="card-title">{cake.name}</h5>
                    <p className="card-text">₹{cake.price}</p>
                    <div style={{textAlign:"center"}}>
                   <Link to={"/cake/"+cake.cakeid}> <button className="btn btn-primary">Cake Details</button> </Link>
                    </div>
                </div>
                </div>
            ))}
    </div>
    )
}
export default Search