import { useForm } from "react-hook-form";
import { schameFormRegister } from "./SchameFormRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../InputForm/InputForm";
import { StyleFormRegister } from "./StyleFormRegister";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SelectForm } from "../SelectForm/SelectForm";

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schameFormRegister),
  });

  const { submitRegister } = useContext(UserContext);

  return (
    <StyleFormRegister onSubmit={handleSubmit(submitRegister)} noValidate>
      <div className="containerTitleForm">
        <h1 className="title3">Crie sua conta</h1>
        <p className="text1">Rapido e gratis, vamos nessa</p>
      </div>
      <div className="containerInputs">
        <InputForm
          placeholder="Digite aqui seu nome"
          label="Nome"
          type="text"
          id="Nome"
          error={errors.name?.message}
          {...register("name")}
        />
        <InputForm
          placeholder="Digite aqui seu email"
          label="Email"
          type="email"
          id="Email"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputForm
          placeholder="Digite aqui sua senha"
          label="Senha"
          type="password"
          id="Senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <InputForm
          placeholder="Digite novamente a senha"
          label="Confirmar Senha"
          type="password"
          id="confirmaSenha"
          error={errors.confirmaSenha?.message}
          {...register("confirmaSenha")}
        />
        <InputForm
          placeholder="Fale sobre você"
          label="Bio"
          type="text"
          id="bio"
          error={errors.bio?.message}
          {...register("bio")}
        />
        <InputForm
          placeholder="Opção de contato"
          label="Contato"
          type="text"
          id="contato"
          error={errors.contact?.message}
          {...register("contact")}
        />
        <SelectForm
          label="Selecionar módulo"
          id="course_module"
          {...register("course_module")}
          error={errors.course_module?.message}
        >
          <option value="">modulo atual</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </SelectForm>
        <button className="text1" type="submit">
          Cadastrar
        </button>
      </div>
    </StyleFormRegister>
  );
}
