import styled from "styled-components";

export const StyleModalCreateTech = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 100;

  .modalController {
    background-color: var(--grey-3);
    width: 296px;
    border-radius: 4px;
  }

  .tittleBtnCloseModal {
    background-color: var(--grey-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 17px;
    border-radius: 4px 4px 0 0;

    h2 {
      font-size: 0.7019rem;
    }

    button {
      background-color: var(--grey-2);
      border: 2px solid transparent;
      padding: 0;
      :hover {
        background-color: var(--grey-1);
      }
    }
  }
  .containerForm {
    padding: 10px 17px 32px 17px;
  }

  @media (min-width: 1024px) {
    .modalController {
      width: 369px;
    }
    .tittleBtnCloseModal {
      h2 {
        font-size: 0.875rem;
      }
      button {
        font-size: 0.875rem;
      }
    }
  }
`;
