import { Link, useHistory, useLocation } from 'react-router-dom';
import '../css/login.css';
import { useState, useEffect } from 'react';
import { } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';



function Navbar(props) {
    console.log('>>>>>>>>>>>> navbar props', props, useLocation().search)
    // var query = queryString.parse(useLocation().search)
    var [text, setText] = useState(queryString.parse(useLocation().search).q)
    var title = "Mohit's Cake Shop"
    var history = useHistory();
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
        // text = event.target.value
        setText(event.target.value)
    }

    function logout() {
        localStorage.clear()
        window.location.href="/"
    }

    var search = function (event) {
        event.preventDefault()
        if (text) {
            var route = '/search?q=' + text
            // alert(route);
            history.push(route);
        }
    }
    var cart = function (event) {
        console.log('cart clicked');
        const route = '/cart';
        history.push(route)
    }

    
    
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
                        <input value={text} style={{width: "300px"}} onChange={getSearchText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={search}  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
                {/* {user =='umang' ? <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                    </div> :
                        <div className="form-inline my-2 my-lg-0">
                <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
                    </div> }     */}

                    {!props.isLoggedIn && <div className="form-inline my-2 my-lg-0">
                        <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
                    </div>}

                { props.isLoggedIn && <div className="form-inline my-2 my-lg-0">
                        <button onClick={logout} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
                        <button onClick = {cart} className="btn btn-outline-warning my-2 my-sm-0">Cart</button>
                    </div>}
                </div>
            </nav>
        </div>
    )
}

// export default Navbar

export default connect(function (state,props) {
    return {
    isLoggedIn: state.isLoggedIn
    }
})(Navbar)