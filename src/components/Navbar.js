import { Link } from 'react-router-dom';

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
        event.preventDefault()
        // alert('search btn clicked');
        if (text) {
            alert('Search for '+ text + 'cakes')
            
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
                        marginTop: "-15px"
                    } }
          className="header_logo"
          alt="logo"
          src="cake_logo_2.png"
        ></img>
                </Link>
                {/* <Link to="/"><h3>Mohit's Cake Shop</h3></Link> */}
                {/* <a className="navbar-brand" href="#">Mohit's Cake Shop</a> */}
                <h3 class="offset-3" style={{ textAlign: "center", color:"gray", fontFamily:"serif" }}> Mohit's cake shop</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <form className="form-inline my-2 my-lg-0">
                        <input onChange={getSearchText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={search}  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                {/* {element} */}
                {/* {user == 'umang' && <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                                </div>} */}
                {/* {user == 'umang' || <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                                </div>} */}
            <div className="form-inline my-2 my-lg-0">
            <Link to="/signup"><button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Signup</button></Link>
                    </div>
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