import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
