import { useForm } from "react-hook-form";
import { InputForm } from "../InputForm/InputForm";
import { SelectForm } from "../SelectForm/SelectForm";
import { schameFormCreateTech } from "./SchameFormCreateTech";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider";
import { StyleFormCreateTech } from "./StyleFormCreateTech";

export function FormCreateTech({ setIsRegisterTech }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schameFormCreateTech),
  });

  const { registerTechnology } = useContext(TechContext);

  async function submitRegisterTechnology(formdataRegisterTech) {
    await registerTechnology(formdataRegisterTech);
    setIsRegisterTech(false);
  }

  return (
    <StyleFormCreateTech
      onSubmit={handleSubmit(submitRegisterTechnology)}
      noValidate
    >
      <InputForm
        label="Nome"
        placeholder="Digite aqui o nome da tecnologia"
        type="text"
        id="title"
        {...register("title")}
        error={errors.title?.message}
      />
      <SelectForm
        label="Selecionar status"
        id="status"
        {...register("status")}
        error={errors.status?.message}
      >
        <option value="">Escolha um nivel</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </SelectForm>
      <button className="text1" type="submit">
        Cadastrar Tecologia
      </button>
    </StyleFormCreateTech>
  );
}
