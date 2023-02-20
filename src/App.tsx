import { Routes, Route } from "react-router-dom";
import { Container } from "./components/layout/container/container";
import { Home } from "./page/home";
import { Login } from "./page/login";
import { Portfolio } from "./page/portfolio";
import { LoginMiddleware } from "./components/middleware/loginMiddleware/loginMiddleware";
import { Detail } from "./page/detail";

function App() {
  return (
    <Container>
      <LoginMiddleware>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/user-detail/:userId" element={<Detail />} />
        </Routes>
      </LoginMiddleware>
    </Container>
  );
}
export default App;
