import { FormEditTech } from "../FormEditTech/FormEditTech";
import { StyleModalEditTech } from "./StyleModalEditTech";

export function ModalEditTech({
  children,
  setIsEditModalOpen,
  idTEch,
  currentTech,
}) {
  return (
    <StyleModalEditTech className="backdrop">
      <div role="dialog" className="modalController">
        <div className="tittleBtnCloseModal">
          <h2 className="title3">Tecnologia Detalhes</h2>
          <button
            className="modalClose title3"
            type="button"
            onClick={() => setIsEditModalOpen(false)}
          >
            X
          </button>
        </div>
        <div className="containerForm">
          <FormEditTech
            setIsEditModalOpen={setIsEditModalOpen}
            idTEch={idTEch}
            currentTech={currentTech}
          />
        </div>
        {children}
      </div>
    </StyleModalEditTech>
  );
}
