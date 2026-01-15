import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";

function Login() {
  let {setAuthStatus} = useContext(userContext)
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let loginResponse = await fetch("http://localhost:8080/auth/login", {
      method: "post",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    if(loginResponse.ok)
      alert("login successull")
    const getCurrentUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/auth/getCurrentUser",
          {
            method: "GET",
            credentials: "include"
          }
        );

        if (!response.ok) {
          console.log("failed");
          return;
        }

        const data = await response.json();
        console.log("current user:", data);
        setAuthStatus(true)
        navigate("/")
      } catch (error) {
        console.error(error);
      }
    };
    getCurrentUser()
  };

  return (
    <div className="min-h-screen flex items-center justify-center"
    onSubmit={handleSubmit}
    >
      <form className="bg-white w-[380px] p-8 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <input
          name="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
          onChange={handleChange}
        />

        <button
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
