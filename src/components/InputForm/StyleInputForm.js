import styled from "styled-components";

export const StyleInputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
  background-color: transparent;

  label {
    font-size: 0.6106rem;
    color: var(--grey-0);
  }
  input {
    background-color: var(--grey-2);
    border-radius: 4px;
    padding: 8px 17px;
    color: var(--grey-0);
    font-size: 0.8125rem;
    :hover {
      border: 2px solid var(--grey-0);
    }
    :focus {
      outline: none;
    }
    ::placeholder {
      font-size: 0.8125rem;
      font-weight: 400;
    }
  }
  p {
    color: var(--toast-error);
    font-size: 0.6106rem;
  }

  @media (min-width: 1024px) {
    label {
      font-size: 0.7612rem;
    }
    input {
      font-size: 1.015rem;
      ::placeholder {
        font-size: 1.015rem;
      }
    }
    p {
      font-size: 0.7612rem;
    }
  }
`;
