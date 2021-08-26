
var cakestyle = {
    width: "20rem",
    padding: "20px",
    margin:"10px",
}



function Cake(props) {
    return (
    <div>
        <div className="card" style={ cakestyle }>
                <img style={{ height:"300px"}} className="card-img-top" src={props.cake.image} alt="Card image cap" />
            <div className="card-body">
                <h5 style={{ color:"black"}} className="card-title">{props.cake.title}</h5>
                    <p style={{ color:"gray"}} className="card-text">{props.cake.price}</p>
            </div>
        </div>
    </div>
    )
}

export default Cake