
import { Route,Routes } from "react-router-dom";
import Cart from "./page/cart";
import Detail from "./page/detail";
import Home from "./page/home";
import Login from "./page/login";
import Register from "./page/register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/detail/:id" element={<Detail/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route> 
    </Routes>
  );
}

export default App;
