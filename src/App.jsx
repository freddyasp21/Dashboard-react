import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Pages admin
import Home from "./pages/admin/Home";
import Chat from './pages/admin/Chat'
import Error404 from "./pages/Erro404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth/>}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat/>}/>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
