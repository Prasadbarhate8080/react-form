import React, { Children, useContext, useEffect, useState } from "react";
import { userContext } from "../../context/userContext";
import { useLocation, useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = false }) {
  let navigate = useNavigate();
  let location = useLocation()
  let { authStatus, setAuthStatus } = useContext(userContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/auth/getCurrentUser",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.ok) {
          setAuthStatus(true);
        } else setAuthStatus(false);
      } catch (error) {
        console.error(error);
        setAuthStatus(false);
      } finally {
        setLoading(false);
      }
    };
    getCurrentUser();
  }, []);
  useEffect(() => {
    if (!loading) {
      if (authentication && !authStatus) {
        navigate("/login", { replace: true });
      }
      if (!authentication && authStatus) {
        navigate("/", { replace: true });
      }
    }
  }, [authStatus, loading, authentication]);
  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
}

export default AuthLayout;
