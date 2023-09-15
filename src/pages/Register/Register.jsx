import { FormRegister } from "../../components/FormRegister/FormRegister";
import logo from "../../../src/assets/logo.svg";
import { Link } from "react-router-dom";
import { StyleRegister } from "./StyleRegister";

export function Register() {
  return (
    <StyleRegister>
      <section>
        <div className="containerLogoButton">
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <Link className="text2" to="/">
            Voltar
          </Link>
        </div>
        <FormRegister />
      </section>
    </StyleRegister>
  );
}
