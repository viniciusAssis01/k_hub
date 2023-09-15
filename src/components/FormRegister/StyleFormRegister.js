import styled from "styled-components";

export const StyleFormRegister = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 33px 17px;
  background-color: var(--grey-3);
  border-radius: 4px;

  .containerTitleForm {
    margin-bottom: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;

    h1 {
      text-align: center;
      font-size: 0.8994rem;
    }
    p {
      text-align: center;
      font-size: 0.5994rem;
      color: var(--grey-1);
    }
  }

  .containerInputs {
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
      border-radius: 4px;
      background-color: var(--color-primary-negative);
      font-weight: 500;
      font-size: 0.8rem;
      :hover {
        background-color: var(--color-primary-0);
      }
    }
  }

  @media (min-width: 1024px) {
    .containerTitleForm {
      h1 {
        font-size: 1.125rem;
      }
      p {
        font-size: 0.75rem;
      }
    }
    .containerInputs {
      button {
        font-size: 1rem;
      }
    }
  }
`;
