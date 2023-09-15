import styled from "styled-components";

export const StyleItemCardTechnology = styled.li`
  width: 100%;
  background-color: var(--grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 12.18px 12.18px;
  :hover {
    background-color: var(--grey-2);
    cursor: pointer;
  }

  p {
    color: var(--grey-1);
  }

  @media (min-width: 1024px) {
    padding: 13px 22px;
  }
`;
