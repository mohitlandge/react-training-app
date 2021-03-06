
import Cake from "./Cake"
import React, { useEffect, useState, Component } from "react"
import axios from "axios"
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";



function CakeList() {
    var [cakes, setCakes] = useState([])
    let [loading, setLoading] = useState(true);
    const color = 'pink';

    useEffect(() => { 
        axios({
            method: "get",
            url: process.env.REACT_APP_BASEAPI+ "/allcakes",
        }).then((response) => {
            console.log(response)
            console.log("response from get cakes api", response.data)
            setCakes(response.data.data)
            setLoading(false);
        }, (error) => {
                console.log("error from get api", error)
                setLoading(false);
        })
    },[])
    // var cakes = [{
    //     title: 'Mixed Flavoured cake',
    //     price: 600,
    //     image: 'cake_1.jpeg',
    //     description: "Mixed Flavoured cake. Try mix and matching these cake flavour combinations at your next birthday party to make everyone's head turn.",
    // },
    // {
    //     title: 'Chocolate  cake',
    //     price: 550,
    //     image: 'cake_2.jpeg',
    //     description : "Chocolate Cake. Quick Let's get out of here. Michael Rosen. Penguin. I love chocolate cake. And when I was a boy. I love it even more.",
    // },
    // {
    //     title: 'vanilla cake',
    //     price: 500,
    //     image: 'cake_3.jpeg',
    //     description : "Vanilla Cake. Vanilla dream cake 40K Fluffy Vanilla Cake with Whipped Vanilla Bean Frosting 95K Eggless",
    // },
    // {
    //     title: 'Pineapple cake',
    //     price: 600,
    //     image: 'cake_4.jpeg', 
    //     description : "t is moist and fluffy, with a mild pineapple flavor and crushed pineapple baked right in",
    //     },
    //     {
    //         title: 'Mixed Flavoured cake',
    //         price: 600,
    //         image: 'cake_9.jpeg',
    //         description: "Mixed Flavoured cake. Try mix and matching these cake flavour combinations at your next birthday party to make everyone's head turn.",
    //     },
    //     {
    //         title: 'Chocolate  cake',
    //         price: 550,
    //         image: 'cake_5.jpeg',
    //         description : "Chocolate Cake. Quick Let's get out of here. Michael Rosen. Penguin. I love chocolate cake. And when I was a boy. I love it even more.",

    //     },
    //     {
    //         title: 'vanilla cake',
    //         price: 500,
    //         image: 'cake_7.jpeg',
    //         description : "Vanilla Cake. Vanilla dream cake 40K Fluffy Vanilla Cake with Whipped Vanilla Bean Frosting 95K Eggless",

    //     },
    //     {
    //         title: 'Pineapple cake',
    //         price: 600,
    //         image: 'cake_8.jpeg',
    //         description : "t is moist and fluffy, with a mild pineapple flavor and crushed pineapple baked right in",

    //     },
    
    // ]
    return (
        <div className="row" style={{ paddingLeft: "50px" }} >
            <GridLoader color={color} loading={loading} css={{display:"block", margin:"0 auto", borderColor: "red"}} size={15} />
            {
                cakes.map((each,index)=>{
                    return <Cake kay={index} cake={each} />
                })
            }
        </div>
    )   
}
export default CakeList



