import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--grey-3);
  padding: 35px 12px;
  position: relative;
  top: 82px;

  .containerIdentication {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-size: 12px;
      color: var(--grey-1);
    }
  }

  @media (min-width: 1024px) {
    padding: 45px 0 45px 0;

    .containerIdentication {
      flex-direction: row;
      justify-content: space-between;
      width: 770px;
      margin: 0 auto;
    }
  }
`;
