import styled from "styled-components";

export const StyleMain = styled.main`
  position: relative;
  top: 83px;

  section {
    padding: 37px 12px;
  }

  .ContainerCreateTech {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 23px;

    button {
      border-radius: 4px;
      background-color: var(--grey-3);
      padding: 10px 15px;
      :hover {
        background-color: var(--grey-1);
      }
    }
  }

  @media (min-width: 1024px) {
    section {
      padding: 45px 0 45px 0;
      margin: 0 auto;
      width: 770px;
    }
  }
`;
