import { Link } from 'react-router-dom';
import '../css/login.css';
import { useState, useEffect } from 'react';


function Navbar() {
    var title = "Mohit's Cake Shop"
    var user = "umang1"
    if (user == 'umang') {
        var element = <div className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </div>
    } else {
        var element = null
    }
    var text 

    var getSearchText = function (event) {
        text = event.target.value
    }

    var search = function (event) {
        // event.preventDefault()
        // alert('search btn clicked');
        if (text) {
            // alert('Search for '+ text + 'cakes')
            
        }
    }


//   function signup() {
//     window.location.push("/signup");
//   }
    
        
    // preve
    return (
        <div>
            <nav style={{ height:"50px" }} className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    <img style={{
                        width: "100px",
                        objectFit: "contain",
                        margin: "0 20px",
                        marginTop: "-22px"
                    } }
          className="header_logo"
          alt="logo"
          src="https://i.pinimg.com/originals/bc/b3/59/bcb35977c102ef35735041b135a6e999.png"
        ></img>
                </Link>
                <h3 class="offset-4" style={{ fontFamily: "verdana", padding: "5px", borderBottom:"1px solid blue", textAlign: "center", color:"violet", fontFamily:"serif" }}><b> Mohit Cake Shop</b></h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <form className="form-inline my-2 my-lg-0">
                        <input style={{width: "300px"}} onChange={getSearchText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/search"><button onClick={search}  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                                </form>
                                {/* {element} */}
                {/* {user == 'umang' && <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                                </div>} */}
                {/* {user == 'umang' || <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                                </div>} */}
            {/* <div className="form-inline my-2 my-lg-0">
            <Link to="/signup"><button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Signup</button></Link>
                    </div> */}
                {user =='umang' ? <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                    </div> :
                        <div className="form-inline my-2 my-lg-0">
                <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
                    </div> }    
                </div>
            </nav>
        </div>
    )
}

export default Navbar