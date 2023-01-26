import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "./Input.jsx";

export default function Form({ data }) {
  const navigate = useNavigate();
  const INITIAL = Object.keys(data.fields).reduce((acc, el) => {
    acc[el] = "";
    return acc;
  }, {});
  const [formData, setFormData] = useState(INITIAL);
  const handleChange = (e) => {
    setFormData(
      (prev) => (prev = { ...prev, [e.target.name]: e.target.value })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4010/users/" + data.submit, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        switch (data.submit) {
          case "register":
            navigate("/");
            break;
          case "login":
            navigate("/albums");
            break;
          default:
            break;
        }

        setFormData(INITIAL);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {Object.keys(data.fields).map((el) => (
          <Input
            data={{ name: el, type: data.fields[el] }}
            handleChange={handleChange}
            formData={formData}
          />
        ))}
        <button>{data.submit}</button>
      </form>
      <NavLink to={data.submit === "register" ? "/" : "/register"}>
        {data.submit === "register" ? "LogIn" : "SignUp"}
      </NavLink>
    </>
  );
}
