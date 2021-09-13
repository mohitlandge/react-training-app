import React, { Component }  from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cake from "./Cake"
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
import queryString from 'query-string';


function Search(props) {

var query = queryString.parse(props.location.search)
var [cakes, setCakes] = useState([]);
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
let [loading, setLoading] = useState(true);
let [color, setColor] = useState("#FFFFFF");

    useEffect(()=>{
        axios({
            url: process.env.REACT_APP_BASEAPI+"/searchcakes?q="+query.q,
            method: 'get'
        }).then((response)=>{
            console.log("response here", response.data.data);
            setCakes(response.data.data);
            console.log(cakes)
            setLoading(false);
        },(error)=>{
            console.log("error", error);
        })
    }, [query.q])
    
    return (
        <div>
            <div className="row">
                {
                    cakes.map((each, index) => {
                        
                        return <Cake key={index} cake={ each}/>
                    })
                }
                {
                    cakes.length == 0 && <div>
                        <h2>No result found for your search { query.q} . Please try some other cake!!</h2>
                    </div>
                }

            </div>
            
        </div>
    )
}
export default Search