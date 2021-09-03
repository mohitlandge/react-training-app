import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import Admin from './components/Admin';
import Home from './components/Home';
import Forgot from './components/Forgot';
import PageNotFound from './components/PageNotFound';
import CakePage from './components/CakePage';
import CakeDetail from './components/CakeDetail';


function NewApp() {
    return (
        <div>
            {/* Hello */}
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/search' component={Search} />
                    <Route exact path='/carousel' component={Carousel} />
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/admin' component={Admin} />
                    <Route exact path='/forgot' component={Forgot} />
                    <Route exact path="/cake/:cakeid" component={CakeDetail}></Route>
                    <Route exact path='/*' component={PageNotFound} />

                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default NewApp