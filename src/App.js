import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"

import Cake from "./components/Cake";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import UserList from './components/UserList';
import CakeList from './components/CakeList';

function App() {

  // var cake1 = {
  //   name: "chocolate tuffle",
  //   price: 586,
  //   image: "cake_1.jpeg"
  // }

  // var cake2 = {
  //   name: "mazzapica",
  //   price: 900,
  //   image: "cake_2.jpeg"
  // }


  return (
    <div className="App">
      <Navbar />
      <Login />
      <SignUp />
      <h4>Cake List</h4>
      < UserList />
      <CakeList />
      {/* <Cake cake={cake1} />
      <Cake cake={cake2} /> */}
    </div>
  );
}

export default App;
