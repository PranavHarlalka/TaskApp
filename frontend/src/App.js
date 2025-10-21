import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
