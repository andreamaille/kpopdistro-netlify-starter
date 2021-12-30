import styled from 'styled-components'

export const StyledSection = styled.section`
  color: var(--black);
  border-radius: 12px;
  padding: 24px;
  & h2 {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 50%,
      var(--highlight) 50%
    );
    display: inline-block;
    margin-bottom: 16px;
  }
  & p {
    line-height: 2;
    font-weight: 400;
    margin-bottom: 16px;
  }
  & a {
    border-bottom: 2px solid var(--secondary);
    font-weight: 700;
    &:hover {
      border-bottom: 2px solid var(--primary);
    }
  }
`
