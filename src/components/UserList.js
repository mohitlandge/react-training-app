import React, { Component }  from 'react';

class UserList extends Component{
    constructor() {
        super()
        this.state = {
            //data which is supposed to be changed
            onlineUser: 0
        }
    }
    joinMeet = () => {
        console.log('this is', this)
        this.setState({
            onlineUser:this.state.onlineUser+1
        })
    }
    render() {
        return (
            <div>
                {this.state.onlineUser}
                <button className="btn btn-primary" onClick={this.joinMeet}>Join Meet</button>
            </div>
        )
    }
}


export default UserList





// function UserList() {
//     var users = [{
//         name: 'Umang',
//         salary: 3800000
//     },
//         {
//             name: 'mohit',
//             salary: 600000
//         }
//     ];
//     var onlineUser = 0
//     var join = function () {
//         onlineUser++
//         console.log('online users', onlineUser)
        
//     }

//     return (
//         <div>
//             {onlineUser}
//             <button onClick={join}>Join Meeting</button>

// {/* <table className="table">
//     <thead>
//         <tr>
//         <th scope="col">#</th>
//         <th scope="col">Name</th>
//         <th scope="col">Salary</th>
//         </tr>
//     </thead>
//     <tbody>
//                     {users.map((each, index) => {
//                         console.log(each.name);
//         //whatever you want to show on screen return that element from this function
//             return (
//             <tr key={index}>
//                 <td scope="row">{index+1}</td>
//                 <td>{each.name}</td>
//                 <td>{each.salary}</td>
//                 </tr>
//             )
//     })}
    
//     </tbody>
// </table>        */}
// </div>
//     )   
// }

// export default UserList
