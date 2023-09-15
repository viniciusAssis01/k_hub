import React from "react";
import { StyleItemCardTechnology } from "./StyleitemCardTechnology";

export const ItemCardTechnology = ({ title, status, onClick }) => {
  return (
    <StyleItemCardTechnology onClick={onClick}>
      <h2 className="title3">{title}</h2>
      <p className="text1">{status}</p>
    </StyleItemCardTechnology>
  );
};
