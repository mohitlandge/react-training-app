import React, { Component }  from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom';


// class CakePage extends Component{
function CakePage() {
    var [cake, setCake] = useState(null)
    const params = useParams()
    // console.log(params.cakeid)
    axios({
        method: "get",
        url: process.env.REACT_APP_BASEAPI+ '/cake/'+params.cakeid,
        
    }).then((response) => {
        // console.log(response.data);
        // console.log("response from signup api", response)
        // console.log(response.data.data)
        
            // setCake(response.data.data)
        
        // setState({
        //     cake:response.data.data
        // })
    }, (error) => {
        console.log("error from signup api", error)
    })
    console.log('hello')
    // console.log(cake)
    // useEffect(() => {
    // },[])
        
    
    console.log(cake.cakeid);
    console.log('checkkkk');
    return (
        <div className="container-fluid">
            {/* <div style={{ border: "1px solid black", backgroundColor: "red" }} className="col-sm-8 col-md-8 offset-2">
                <div className="col-md-5">
                    <img src={cake.image}  />
                </div>

            </div> */}
            
         
        </div>
        )
    }



export default CakePage