import logo from "../../../src/assets/logo.svg";
import { StyleNavBar } from "./StyleNavBar";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export function NavBar() {
  const { logout } = useContext(UserContext);

  return (
    <StyleNavBar className="navBar">
      <div className="containerLogoEButton">
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <nav>
          <button className="text2" onClick={logout}>
            Sair
          </button>
        </nav>
      </div>
    </StyleNavBar>
  );
}
