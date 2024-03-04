import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";

function App() {


  return (
        <>
         <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>} />
           <Route path="/resturent/:id" element={<SingleProduct/>} />
         </Routes>
        </>
  );
}




export default App;
