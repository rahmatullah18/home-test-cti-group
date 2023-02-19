import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/layout/container/container";
import { Home } from "./page/home";
import { Login } from "./page/login";
import { Portfolio } from "./page/portfolio";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const local = localStorage.getItem("isLoggedIn") === "1";
    if (local === false) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <Container>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}
export default App;
