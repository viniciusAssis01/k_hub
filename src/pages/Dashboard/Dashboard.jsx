import { NavBar } from "../../components/NavBar/NavBar";
import { Header } from "../../components/Header/Header";
import { StyleMain } from "./StyleMain";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { UlListTechnology } from "../../components/UlListTechnology/UlListTechnology";
import { useEffect } from "react";
import { TechContext } from "../../providers/TechProvider";

export function Dashboard() {
  const [isRegisterTechOpen, setIsRegisterTech] = useState(false);

  const { user, loading, pegaUser } = useContext(UserContext);
  const { technologys } = useContext(TechContext);

  useEffect(() => {
    async function initiDashboard() {
      await pegaUser();
    }
    initiDashboard();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <NavBar />
      <Header />
      <StyleMain>
        <section>
          <div className="ContainerCreateTech">
            <h1 className="title2">Tecnologias</h1>
            <button onClick={() => setIsRegisterTech(true)}>
              <h1>+</h1>
            </button>
          </div>
          {isRegisterTechOpen ? (
            <Modal setIsRegisterTech={setIsRegisterTech}></Modal>
          ) : null}
          {technologys.length === 0 ? null : <UlListTechnology />}
        </section>
      </StyleMain>
    </>
  );
}
