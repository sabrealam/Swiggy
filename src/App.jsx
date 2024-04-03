import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Circle from "./pages/components/Circle";
import Search from "./pages/Search";
import SignIn from "./pages/Help";
import AllRoute from "./allRoute/AllRoute";
function App() {
  return (
    <>
      <Navbar />
      <AllRoute />
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <Search/> */}
      {/* <SignIn/> */}
    </>
  );
}

export default App;
