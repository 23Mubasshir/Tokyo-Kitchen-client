import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
