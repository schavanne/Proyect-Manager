import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {
  const { auth, loading } = useAuth();
  console.log(auth);
  {
    if (loading) {
      return <p>Cargando..</p>;
    }
  }
  return (
    <>
      {auth._id ? (
        <div>
          <Header />
          <div>
            <Sidebar />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
