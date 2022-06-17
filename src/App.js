import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { Route, Routes} from 'react-router-dom';
import "./App.css"
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/users" element={<UserList/>}></Route>
          <Route path="/products" element={<ProductList/>}></Route>
          <Route path="/user/:id" element={<User/>}></Route>
          <Route path="/product/:id" element={<Product/>}></Route>
          <Route path="/newuser" element={<NewUser/>}></Route>
          <Route path="/newproduct" element={<NewProduct/>}></Route>
        </Routes>
        
      </div>

    </div>

  );
}

export default App;


