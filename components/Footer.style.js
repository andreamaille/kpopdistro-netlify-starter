import styled from 'styled-components'

export const StyledFooter = styled.footer`
  color: var(--black);
  background-color: var(--secondary);
  padding: 24px 0;
`
export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  & ul li {
    margin: 8px;
  }
  & ul:last-child {
    text-align: right;
  }
`

export const StyledFineprint = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 16px auto;
  font-weight: 400;
  & p {
    font-size: var(--font-size-micro);
  }
`
