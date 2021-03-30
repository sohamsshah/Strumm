import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Categories from "./components/Categories/Categories"
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
import WishList from "./components/WishList/WishList"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/wishlist" component={WishList}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
