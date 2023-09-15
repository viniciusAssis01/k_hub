import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  async function submitRegister(formData) {
    delete formData.confirmaSenha;
    try {
      const response = await api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, "2500");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  }

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  async function submitLogin(formDatalogin) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formDatalogin);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      toast.success("Login realizado com sucesso");

      setTimeout(() => {
        navigate("/dashboard");
      }, "2500");
    } catch (error) {
      toast.error("Email e/ou senha invalidos");
    } finally {
      setLoading(false);
    }
  }

  async function pegaUser() {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN")) || "";
      if (!token) {
        return navigate("/");
      }
      setLoading(true);
      const response = await api.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      window.location.pathname === "/" || "/register"
        ? navigate("/dashboard")
        : null;
    } catch (error) {
      localStorage.clear();
      toast.error("erro");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.clear();
    setUser({});
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        submitRegister,
        submitLogin,
        user,
        setUser,
        logout,
        loading,
        pegaUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
