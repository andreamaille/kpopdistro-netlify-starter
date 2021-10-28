import styled from 'styled-components'

export const StyledProductListing = styled.li`
  width: 28%;

  background-color: var(--light-pink);
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  &:hover {
    box-shadow: 13px 13px 0px 2px var(--dark-purple);
  }
  & a {
    color: var(--white);
  }

  & h3 {
    margin-bottom: 8px;
    text-transform: uppercase;
  }
`
export const StyledImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 275px;
    object-fit: cover;
  }
`

export const StyledProductDetails = styled.div`
  margin: 8px 0;
  & p:first-child {
    color: var(--white);
    margin-bottom: 8px;
  }
  & p:last-child {
    color: var(--dark-purple);
  }
`
