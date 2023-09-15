import { FormLogin } from "../../components/FormLogin/FormLogin";
import { StyleLogin } from "./StyleLogin.js";
import logo from "../../../src/assets/logo.svg";

export function Login() {
  return (
    <>
      <StyleLogin>
        <section>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <FormLogin />
        </section>
      </StyleLogin>
    </>
  );
}
