import { Link, useHistory, Redirect, History } from 'react-router-dom';
import '../css/login.css';
import Footer from './Footer';
import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


function Login(props) {
    var history = useHistory()
    var [error, setError] = useState(null)
    var [loginError, setLoginError] = useState(null)
    var [passwordError, setPasswordError] = useState(null)
    var [user, setUser] = useState({})
    
    useEffect(() => {
        // var user = {}
    },[])
    

    function getEmail(e) {
        user.email = e.target.value
        setUser(user)
    }
    function getPassword(e) {
        user.password = e.target.value
        setUser(user)

        
    }
    function login(e) {
        e.preventDefault()
        console.log("..........", user)
        if (!user.email) {
            setError("Email is required");
        }
        if (!user.password) {
            setPasswordError("Password is required");
        }
        if (user.email && user.password) {
            axios({
                method: "post",
                url: process.env.REACT_APP_BASEAPI+ '/login',
                data: user,
                
            }).then((response) => {
                console.log(response.data);
                console.log("response from login api", response)
                localStorage.token = response.data.token
                if (response.data.token) {
                    props.dispatch({
                        type: "LOGIN",
                        
                    })
                    // props.login()
                    history.push('/')
                } else {
                    setLoginError('The credentials are invalid')
                }

            }, (error) => {
                console.log("error from login api", error)
            })
        }
        
    }

    if (localStorage.token) {
        return <Redirect to ="/" />
    } else {
        return (
            <div id="login_div" class="container-fluid">
                <br />
                <div id="form_div"  className="col-md-4 offset-4 ">
                <br />
                    <h4 style={{ textAlign: "center", fontFamily: "verdana" }}>Login</h4>
                    <br />
            <form>
            <div class="form-group">
                {/* <label for="exampleInputEmail1">Email</label> */}
                <input onChange={getEmail} required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" />
                            <small></small>
                            {error}
            </div>
            <div class="form-group">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input minLength="8" onChange={getPassword} required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            <small></small>
                            {passwordError}
                        </div>
                        <div className="form-group">
                            <Link to="/forgot">Forgot Password</Link>
                            <Link style={{float:"right"}} to="/signup">New user Click here</Link>
                        </div>
                        <div className="form-group">
                            { loginError}

                        </div>
                    <br></br>
                    <div className="col-md-2 offset-4">
                    <button id="login_btn" onClick={login} type="submit" class="btn">Login</button>
                    </div>
                    <br></br>

                    <div className="row">
                            <div className="form-inline col-md-4 ">
                                <span>SignUp Here</span>
                                <br></br>
                                <br></br>
                                <Link to="/signup"><button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Signup</button></Link>
                            </div>
                            <div className="form-inline col-md-4 offset-2 ">
                                <Link to="/forgot">Forgot password..</Link>
                            </div>    

            <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
                    </div>
                </form>
            {/* </div> */}
                </div>
            </div>
            
        )
    }

}
// export default Login

export default connect()(Login)




