import { Fragment } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import SinglePost from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <Fragment>
      <TopBar />
      <Write/>
    </Fragment>
  );
}

export default App;
