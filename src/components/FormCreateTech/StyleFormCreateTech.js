import styled from "styled-components";

export const StyleFormCreateTech = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    color: var(--grey-0);
    border-radius: 4px;
    background-color: var(--color-primary-negative);
    font-weight: 500;
    font-size: 0.8rem;
    :hover {
      background-color: var(--color-primary-0);
    }
  }

  @media (min-width: 1024px) {
    button {
      font-size: 1rem;
    }
  }
`;
