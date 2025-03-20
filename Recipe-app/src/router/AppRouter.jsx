import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './../components/navbar/Navbar.jsx';
import Home from '../pages/home/Home.jsx';
import Detail from './../pages/detail/Detail';
import About from './../pages/about/About';
import Login from './../pages/login/Login';
import PrivateRouter from "./PrivateRouter.jsx";

const AppRouter = () => {
  return (
    <>

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="" element={<Home />}/>
                <Route path="login" element={<Login />}/>
                <Route path="about" element={<PrivateRouter />}>
                  <Route path="" element={<About />}/>                  
                </Route>
                <Route path="detail" element={<PrivateRouter />}>
                  <Route path="" element={<Detail />}/>                 
                </Route>
                
                
            </Routes>

        </BrowserRouter>
    
    </>
  )
}

export default AppRouter;
