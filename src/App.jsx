import { Route, Routes } from "react-router-dom";
import "./App.css";
import Album from "./components/Album.jsx";
import Form from "./components/Form.jsx";
import Page404 from "./components/Page404.jsx";
import Photos from "./components/Photos.jsx";
import Users from "./components/Users.jsx";

function App() {
  const data = {
    login: {
      fields: {
        name: "name",
        email: "email",
        password: "password",
      },
      submit: "login",
    },
    register: {
      fields: {
        name: "name",
        email: "email",
        password: "password",
        age: "number",
      },
      submit: "register",
    },
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form data={data.login} />} />
        <Route path="register" element={<Form data={data.register} />} />

        <Route path="albums" element={<Album />} />
        <Route path="photos" element={<Photos />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
