import React, { Component } from 'react';
import Footer from './Footer';
import '../css/login.css';
import axios from 'axios';


class Signup extends Component {
    constructor() {
        super()
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        // alert('mounted');
        
    }
    componentDidUpdate() {
        // alert('updated');
        
    }
    componentWillUnmount() {
        // alert('leaving');
        
    }
    user = {}
    
    
    getName = (e) => {
        this.user.name = e.target.value
    }
    getEmail = (e) => {
        this.user.email = e.target.value
    }
    getPassword = (e) => {
        this.user.password = e.target.value
    }

    signup = (e) => {
        
        e.preventDefault()
        // console.log("details are ", this.user)
        if (this.user.name && this.user.email && this.user.password) {
            // alert('clicked');
            

            axios({
                method: "post",
                url: process.env.REACT_APP_BASEAPI+ '/register',
                data: this.user,
                
            }).then((response) => {
                console.log(response.data);
                console.log("response from signup api", response)
            }, (error) => {
                console.log("error from signup api", error)
            })

            var newobj = {...this.user}
            this.state.users.push(newobj)    
            this.setState({
                users:this.state.users
            })
        }   
        
    }
    render(users) {
        return (
            <div id="signup_div" class="container-fluid">
                <br />
                <div id="form_div" className="col-md-6 offset-3"
                    // style={{ border: "1px solid black", padding: "10px", borderRadius: "20px", backgroundColor: "pink" }}
                >
                    <h4 className="mt-2" style={{ textAlign: "center" }}>Add User</h4>
                    <br />
                <form >
                    <div className="form-group">
                        {/* <label for="exampleInputEmail1">Name</label> */}
                        <input name="name" onChange={this.getName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <input name="email" onChange={this.getEmail} type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <input name="password" onChange={this.getPassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button style={{ textAlign:"center"}} onClick={this.signup} type="submit" className="btn btn-primary">SignUp</button>
                </form>
                <br />

                <h3 style={{ textAlign:"center"}}>Added User</h3>
                <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(users)}
                    {this.state.users.map((each, index) => {
                        console.log(each.name);
        //whatever you want to show on screen return that element from this function
                    return (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{each.name}</td>
                        <td>{each.email}</td>
                        <td>{each.password}</td>
                    </tr>
                    )
                })}
                    </tbody>
                    
                </table>
            </div>
    </div>
            
        )
    }
}
export default Signup