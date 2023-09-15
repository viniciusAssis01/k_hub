import styled from "styled-components";

export const StyleNavBar = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--grey-3);
  padding: 17px 13px 24px 13px;
  position: fixed;
  background-color: var(--grey-4);
  z-index: 10;

  .containerLogoEButton {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    figure {
      width: 101px;
      height: 14px;
      object-fit: cover;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }

    button {
      background-color: var(--grey-3);
      padding: 10px 16px;
    }
  }

  @media (min-width: 1024px) {
    padding: 20px 0 20px 0;

    .containerLogoEButton {
      width: 770px;
      margin: 0 auto;
    }
  }
`;
