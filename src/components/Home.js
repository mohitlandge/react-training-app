import Carousel from './Carousel';
import CakeList from './CakeList';
import Footer from './Footer';

function Home() {
    return (
        <div style={{ backgroundColor: "whitesmoke"}} className="container-fluid">
            
            {/* <h3 style={{ textAlign: "center", color:"purple", fontFamily:"Monospace" }}>Welcome to the Mohit's cake shop</h3> */}
            <br></br>
            <Carousel />
            <br></br>
            <div style={{ border: "0.5px gray black", borderRadius:"10px", backgroundColor: "white"}}>
            <h4 className="offset-1 p-2">Cakes by Flavor</h4>
            <CakeList />
            </div>

            <Footer />
        </div>
    )
}


export default Home