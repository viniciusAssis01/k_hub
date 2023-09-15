import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { schameFormLogin } from "./SchameFormLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../InputForm/InputForm";
import { StyleFormLogin } from "./StyleFormLogin";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export function FormLogin() {
  const { submitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schameFormLogin),
  });

  return (
    <StyleFormLogin onSubmit={handleSubmit(submitLogin)} noValidate>
      <h1 className="title3">Login</h1>
      <div className="containerInputs">
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
        <button type="submit" className="text2">
          Entrar
        </button>
      </div>
      <div className="containerInformacaoCadastro">
        <p className="text2">Ainda não possui uma conta?</p>
        <Link to="/register" className="text2">
          Cadastre-se
        </Link>
      </div>
    </StyleFormLogin>
  );
}
