import { Routes, Route } from "react-router-dom";
import { Container } from "./components/layout/container/container";
import { Home } from "./page/home";
import { Login } from "./page/login";
import { Portfolio } from "./page/portfolio";

function App() {
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
