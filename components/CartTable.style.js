import styled from 'styled-components'

export const StyledCartTable = styled.table`
  width: 100%;
  margin: 16px 0;
  & thead {
    background-color: var(--highlight);
    & th:nth-child(2),
    & th:nth-child(3),
    & th:nth-child(4) {
      display: none;
      @media (min-width: 575px) {
        display: table-cell;
      }
    }
  }

  & button {
    background: none;
    border: 2px solid var(--black);
    padding: 8px;
    cursor: pointer;
    display: inline-block;
    &:hover {
      border: 2px solid var(--secondary);
      color: var(--secondary);
    }
  }

  & img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }

  & td {
    padding: 10px 0;
    & div {
      display: block;
      & span {
        font-size: var(--font-size-micro);
        display: block;
        @media (min-width: 575px) {
          display: none;
        }
      }
    }
  }

  & td:nth-child(1) {
    display: flex;
    align-items: center;
  }

  & td:nth-child(2),
  & td:nth-child(3),
  & td:nth-child(4) {
    text-align: center;
    display: none;
    @media (min-width: 575px) {
      display: table-cell;
    }
  }

  & td:last-child {
    text-align: center;
  }
`
