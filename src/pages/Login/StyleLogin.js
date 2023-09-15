import styled from "styled-components";

export const StyleLogin = styled.main`
  width: 100%;
  padding: 81px 12px 50px 12px;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 19px;

    figure {
      width: 101px;
      height: 14px;
      object-fit: cover;
      margin: 0 auto;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    padding-top: 77px;

    section {
      width: 369px;
      margin: 0 auto;
    }
  }
`;
