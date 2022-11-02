import { Fragment } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import SinglePost from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/settings/login/Login";
import Register from "./pages/register/Register";

import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/post/:id" element={<SinglePost/>}/>
      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
