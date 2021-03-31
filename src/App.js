import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Categories from "./components/Categories/Categories"
import Home from "./components/Home/Home"
import {Cart} from "./components/Cart"
import WishList from "./components/WishList/WishList"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/categories" exact component={Categories}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/wishlist" exact component={WishList}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
