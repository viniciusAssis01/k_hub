import React, { useState } from "react";
import { ItemCardTechnology } from "./ItemCadTechnology/ItemCardTechnology";
import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider";
import { StyleUlListTechnology } from "./StyleUlListTechnology";
import { UserContext } from "../../providers/UserProvider";
import { ModalEditTech } from "../ModalEditTech/ModalEditTech";

export const UlListTechnology = () => {
  const { technologys } = useContext(TechContext);
  const { user } = useContext(UserContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [idTEch, setIdTech] = useState("");
  const [currentTech, setCurrentTech] = useState({});

  return (
    <StyleUlListTechnology>
      {technologys?.map((tech) => {
        return (
          <ItemCardTechnology
            key={tech.id}
            title={tech.title}
            status={tech.status}
            onClick={() => {
              setIsEditModalOpen(true),
                setIdTech(tech.id),
                setCurrentTech(tech);
            }}
          />
        );
      })}
      {isEditModalOpen ? (
        <ModalEditTech
          setIsEditModalOpen={setIsEditModalOpen}
          idTEch={idTEch}
          currentTech={currentTech}
        ></ModalEditTech>
      ) : null}
    </StyleUlListTechnology>
  );
};
