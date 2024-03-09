import { BrowserRouter, Routes , Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SIgnIn from "./pages/SIgnIn";
import SIgnUp from "./pages/SIgnUp";
import Profile from "./pages/Profile";
import Header from './Components/Header';

export default function App() {
  return (
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign-in" element={<SIgnIn/>} />
      <Route path="/sign-up" element={<SIgnUp/>} />
      <Route path="/profile" element={<Profile/>} />

    </Routes>
  </BrowserRouter>
  );

}
