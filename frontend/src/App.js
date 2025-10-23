import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TasksPage from "./pages/TasksPage";
import { AuthRoute } from "./guard/Guard"
import TaskFormPage from "./pages/TaskFormPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/tasks" element={<AuthRoute element={<TasksPage />} />} />
        <Route path="/tasks/add" element={<AuthRoute element={<TaskFormPage />} />} />
        <Route path="/tasks/edit/:id" element={<AuthRoute element={<TaskFormPage />} />} />

      {/* FALL BACK ROUTE FOR UNKOWN PAGES */}
        <Route path="*" element={<Navigate to="/tasks"/>}/>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;