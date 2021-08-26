import Carousel from './Carousel';
import CakeList from './CakeList';

function Home() {
    return (
        <div>
            <br></br>
            <h3 style={{ textAlign: "center", color:"purple", fontFamily:"Monospace" }}>Welcome to the Mohit's cake shop</h3>
            <br></br>
            <Carousel />
            <br></br>
            <CakeList />
        </div>
    )
}


export default Home