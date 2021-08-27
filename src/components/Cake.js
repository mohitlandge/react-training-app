
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
                <img style={{ height:"250px"}} className="card-img-top" src={props.cake.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 style={{ color: "black", textAlign: "center" }} className="card-title">{props.cake.title}</h5>
                    <p style={{ textAlign: "center" }}><b>Price : {props.cake.price}</b> &#x20B9;</p>
                    {/* <p>{props.cake.description}</p> */}
                    <button className="btn btn-primary" style={{ textAlign: "left" }}>Add to cart</button>
                    <button className="offset-3 btn btn-secondary" style={{ textAlign:"right"}}>Share</button>
            </div>
        </div>
    </div>
    )
}

export default Cake