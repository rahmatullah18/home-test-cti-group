import { Routes, Route } from "react-router-dom";
import { Home } from "./page/home";
import { Login } from "./page/login";
import { Portfolio } from "./page/portfolio";
import { LoginMiddleware } from "./components/middleware/loginMiddleware/loginMiddleware";
import { Detail } from "./page/detail";

function App() {
  return (
    <LoginMiddleware>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/user-detail/:userId" element={<Detail />} />
      </Routes>
    </LoginMiddleware>
  );
}
export default App;
