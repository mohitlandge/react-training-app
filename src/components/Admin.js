import { useState } from 'react';
import { useEffect } from 'react';

function Admin() {


    // function SearchUser() {
        
    // var [users, setUsers] = useState([...allusers])
    // var search = function (e) {
    //     users = alluser.filter((each) => {
    //         console.log('...each');
    //     })
    // }
        
    var allUsers = [
        {
            name: "mohit landge",
            email: "mohit@gmail.com",
            password: "pass@123"
        },
        {
                name: "rohit rane",
                email: "rohit@gmail.com",
                password: "pass@123"
        },
        {
                name: "ankush pawar",
                email: "ankush@gmail.com",
                password: "pass@123"
        },
        {
                name: "saurabh",
                email: "saurabh@gmail.com",
                password: "pass@123"
        },
    ]
    var [users, setUsers] = useState([...allUsers])
    var search = function (e) {
        if (e.target.value) {
            users = allUsers.filter((each) => {
                return each.name.includes(e.target.value)|| each.email.includes(e.target.value)
            })
            setUsers([...users])
        } else {
            setUsers([...allUsers])
        }
    }

    return (
        <div className="container-fluid">
            <br></br>
            <div className="row">
                <input onChange={search} style={{ width: "300px" }} className="form-control mr-sm-2 col-md-4 offset-4" type="search" placeholder="Search" aria-label="Search" />
                <span>Total Users :{users.length}</span>
                </div>
             <br></br>
            <h3 style={{ textAlign: "center" }}> Search User using Hooks</h3>
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
                    {/* {users} */}
                    {/* <tr>
                        <td>1</td>
                        <td>virat kohli</td>
                        <td>virat@gmail.com</td>
                        <td>71_loading..</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ms Dhone</td>
                        <td>dhoni_ms@gmail.com</td>
                        <td>All_trophies_here</td>
                    </tr> */}
                    {users.map((each, index) => {
                     return   <tr key={index}>
                            <td scope="row">{index + 1}</td>
                            <td>{each.name}</td>
                            <td>{each.email}</td>
                            <td>{each.password}</td>
                                
                        </tr>
                    })}
                    </tbody>
                    
                </table>
            </div>
    )
}

export default Admin