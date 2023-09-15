import { useForm } from "react-hook-form";
import { InputForm } from "../InputForm/InputForm";
import { SelectForm } from "../SelectForm/SelectForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider";
import { StyleFormEditTech } from "./StyleFormEditTech";
import { schameFormEditTech } from "./SchameFormEditTech";

export function FormEditTech({ setIsEditModalOpen, idTEch, currentTech }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schameFormEditTech),
  });

  const { registerTechnology, editTechonology, removeTechology } =
    useContext(TechContext);

  function submitEditTechnology(formDataEditTEch) {
    editTechonology(formDataEditTEch, idTEch);
    setIsEditModalOpen(false);
  }

  function editStatus() {
    let status = 0;
    switch (currentTech.status) {
      case "Iniciante":
        status = 0;
        break;
      case "Intermediário":
        status = 1;
        break;
      case "Avançado":
        status = 2;
        break;
      default:
        status = 0;
        break;
    }

    return status;
  }

  return (
    <StyleFormEditTech onSubmit={handleSubmit(submitEditTechnology)} noValidate>
      <InputForm
        label="Nome"
        placeholder="Digite aqui o nome da tecnologia"
        type="text"
        id="title"
        defaultValue={currentTech.title}
        disabled
      />
      <SelectForm
        label="Selecionar status"
        id="status"
        {...register("status")}
        error={errors.status?.message}
      >
        <option value="Iniciante" disabled={editStatus() >= 0}>
          Iniciante
        </option>
        <option value="Intermediário" disabled={editStatus() >= 1}>
          Intermediário
        </option>
        <option value="Avançado" disabled={editStatus() == 2}>
          Avançado
        </option>
      </SelectForm>
      <div className="containerButtons">
        <button className="btnSaveChange text1" type="submit">
          Salvar alterações
        </button>
        <button
          className="btnDeleteTech text1"
          onClick={() => removeTechology(idTEch)}
          type="button"
        >
          Excluir
        </button>
      </div>
    </StyleFormEditTech>
  );
}
