import { Fragment, useContext } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import SinglePost from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/settings/login/Login";
import Register from "./pages/register/Register";

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { UserContext } from "./context/Context";

function App() {
  const {user} = useContext(UserContext)
  return (
    <Fragment>
      <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/write" element={user? <Write/> : <Register/>}/>
        <Route path="/settings" element={user?<Settings/>: <Login/>}/>
        <Route path="/login" element={user? <Home/> : <Login/>}/>
        <Route path="/register" element={user? <Home/> : <Register/>}/>
        <Route path="/post/:id" element={<SinglePost/>}/>
      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
