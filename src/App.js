import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
import ProductPage from "./components/Categories/Products/ProductPage/ProductPage"
import WishList from "./components/WishList/WishList"
import AllCategories from "./components/Categories/AllCategories/AllCategories"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/wishlist" exact component={WishList}/>
          <Route path="/categories" exact component={AllCategories}/>
          <Route path="/categories/guitars" exact component={() => <ProductPage instrument="Guitar" />}/>
          <Route path="/categories/keys" exact component={() => <ProductPage instrument="Keys" />}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
