import React, { useContext } from "react";
import { userContext } from "../../context/userContext";

function Home() {
  const { setAuthStatus } = useContext(userContext);

  const logout = async () => {
    const response = await fetch("http://localhost:8080/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      alert("Logout successful");
      setAuthStatus(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[360px] text-center border border-gray-200">
        
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome 👋
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          You are successfully logged in
        </p>

        <button
          onClick={logout}
          className="w-full py-2.5 rounded-xl bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 text-white font-medium shadow"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
