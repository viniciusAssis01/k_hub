import styled from "styled-components";

export const StyleSelectForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;

  label {
    font-size: 0.6106rem;
    color: var(--grey-0);
  }

  select {
    background-color: var(--grey-2);
    border-radius: 4px;
    padding: 8px 17px;
    color: var(--grey-0);
    border: 2px solid transparent;
    font-size: 0.8119rem;
    :hover {
      border: 2px solid var(--grey-0);
    }
    option {
      color: var(--grey-0);
    }
  }

  .erroSelect {
    color: var(--toast-error);
    font-size: 10px;
  }

  @media (min-width: 1024px) {
    label {
      font-size: 0.7612rem;
    }
    select {
      font-size: 1.015rem;
    }
    .erroSelect {
      font-size: 0.7612rem;
    }
  }
`;
