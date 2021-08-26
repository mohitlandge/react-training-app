import { Component } from 'react';

class Login extends Component{
    // var email = ''
    // var email = '';
    constructor() {
        super()
        this.state = {
            // email: null,
            // password: null,
            // email_err: '',
            // pass_err: '',
            //data which is supposed to be changed
            // onlineUser: 0
        }
    }
    validateMandatoryFields = (event) => {
        event.preventDefault()
        //     email = this.state.email,
        //     password = this.state.password
        // if (!email) {
        //     email_err = 'Email is not valid'
        // }
        // if (!password) {
        //     pass_err = 'password is not valid'
        // }
    }
    render() {
        return (
    <div className="col-md-6 offset-3 mt-4 ">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small></small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                <small></small>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
        )
    }
}


export default Login





