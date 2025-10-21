import { BrowserRouter } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
