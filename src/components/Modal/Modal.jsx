import { FormCreateTech } from "../FormCreateTech/FormCreateTech";
import { StyleModalCreateTech } from "./StyleModal";

export function Modal({ children, setIsRegisterTech }) {
  return (
    <StyleModalCreateTech className="backdrop">
      <div role="dialog" className="modalController">
        <div className="tittleBtnCloseModal">
          <h2 className="title3">Cadastrar tecnologia</h2>
          <button
            className="modalClose title3"
            type="button"
            onClick={() => setIsRegisterTech(false)}
          >
            X
          </button>
        </div>
        <div className="containerForm">
          <FormCreateTech setIsRegisterTech={setIsRegisterTech} />
        </div>
        {children}
      </div>
    </StyleModalCreateTech>
  );
}
