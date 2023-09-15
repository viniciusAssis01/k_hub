import { StyleHeader } from "./StyleHeader";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export function Header() {
  const { user } = useContext(UserContext);
  return (
    <StyleHeader>
      <div className="containerIdentication">
        <h1 className="title1">Olá, {user.name}</h1>
        <p className="text1">{user.course_module}</p>
      </div>
    </StyleHeader>
  );
}
