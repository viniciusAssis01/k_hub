import styled from "styled-components";

export const StyleContainerMainDashboard = styled.section`
  padding: 37px 12px;
  height: 800px;

  .containerIdentication {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 23px;

    p {
      font-size: 12px;
      color: var(--grey-1);
    }
  }

  @media (min-width: 1024px) {
    padding: 45px 0 45px 0;
    margin: 0 auto;
    width: 770px;

    .containerIdentication {
      margin: 0 auto;
    }
  }
`;
