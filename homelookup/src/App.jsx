import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import Errorpage from "./page/Errorpage";
import Loginpage from "./components/Loginpage";
import Signinpage from "./components/Signinpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signin" element={<Signinpage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
