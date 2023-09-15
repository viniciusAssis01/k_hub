import styled from "styled-components";

export const StyleFormEditTech = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .containerButtons {
    display: flex;
    align-items: center;
    gap: 14px;

    .btnSaveChange {
      color: var(--grey-0);
      border-radius: 4px;
      background-color: var(--color-primary-negative);
      font-weight: 500;
      font-size: 0.8rem;
      padding: 0.5119rem 1.7837rem;
      :hover {
        background-color: var(--color-primary-0);
      }
    }
    .btnDeleteTech {
      color: var(--grey-0);
      border-radius: 4px;
      background-color: var(--grey-1);
      font-weight: 500;
      font-size: 0.8rem;
      padding: 0.5rem 1.125rem;
      :hover {
        background-color: var(--grey-2);
      }
    }
  }
  @media (min-width: 1024px) {
    .containerButtons {
      gap: 22px;

      .btnSaveChange {
        font-size: 1rem;
        padding: 0.6563rem 2.25rem;
      }
      .btnDeleteTech {
        font-size: 1rem;
        padding: 0.6563rem 1.4688rem;
      }
    }
  }
`;
