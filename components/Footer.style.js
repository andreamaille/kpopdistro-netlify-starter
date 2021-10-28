import styled from 'styled-components'

export const StyledFooter = styled.footer`
  color: var(--white);
  background-color: var(--dark-purple);
  padding: 24px 0;
`
export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80%;
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
  margin: 16px auto;
  font-weight: 400;
  font-size: var(--font-size-micro);
`
