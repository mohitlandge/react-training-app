import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../css/login.css';
import { History } from "react-router-dom";
import Footer from './Footer';


class Login extends Component{
    constructor() {
        super()
        this.state = {
        }
    }
    user = {}

    getEmail = (e) => {
        this.user.email = e.target.value
    }
    getPassword = (e) => {
        this.user.password = e.target.value
    }
    login = (e) => {
        console.log(this.user)
        if (this.user.email && this.user.password) {
            if (this.user.password.length >= 8) {
                this.props.history.push('/')    
            }
        }
    }

    render() {
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
                <input onChange={this.getEmail} required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" />
                <small></small>
            </div>
            <div class="form-group">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input minLength="8" onChange={this.getPassword} required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                <small></small>
            </div>
            <br></br>
                    <div className="col-md-2 offset-4">
                    <button id="login_btn" onClick={this.login} type="submit" class="btn">Login</button>
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
                            {/* </div> */}
                            {/* {
                                $('#myModal').on('shown.bs.modal', function () {
                                    $('#myInput').trigger('focus')
                                })
                            } */}

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


export default Login





