import styled from "styled-components";

export const StyleRegister = styled.main`
  width: 100%;
  padding: 81px 12px 50px 12px;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 19px;

    .containerLogoButton {
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

      a {
        text-decoration: none;
        text-align: center;
        color: var(--grey-0);
        border: 2px solid transparent;
        border-radius: 4px;
        background-color: var(--grey-3);
        padding: 0.28rem 1.6106rem;
        font-size: 0.5994rem;
        :hover {
          background-color: var(--color-primary-0);
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding-top: 77px;

    section {
      width: 369px;
      margin: 0 auto;

      .containerLogoButton {
        a {
          font-size: 0.75rem;
        }
      }
    }
  }
`;
