import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import UsersPage from "./Pages/Users";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
