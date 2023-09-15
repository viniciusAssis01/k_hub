import { createContext, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { api } from "../services/api";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, pegaUser } = useContext(UserContext);
  const [technologys, setTechnologys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && setTechnologys(user.techs);
  }, [user]);

  async function registerTechnology(formdataRegisterTech) {
    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("@TOKEN")) || "";
      const response = await api.post("/users/techs", formdataRegisterTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada com sucesso!");
      setTechnologys([...technologys, response.data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function removeTechology(idTEch) {
    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("@TOKEN")) || "";
      const response = await api.delete(`users/techs/${idTEch}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia removida!");
      pegaUser();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function editTechonology(formDataEditTEch, idTEch) {
    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("@TOKEN")) || "";
      const response = await api.put(
        `users/techs/${idTEch}`,
        formDataEditTEch,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Tecnologia editada!");
      pegaUser();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <TechContext.Provider
      value={{
        technologys,
        setTechnologys,
        registerTechnology,
        editTechonology,
        removeTechology,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
