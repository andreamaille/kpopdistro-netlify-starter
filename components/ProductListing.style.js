import styled from 'styled-components'

export const StyledProductListing = styled.li`
  width: 27%;

  background-color: var(--highlight);
  padding: 16px;
  text-align: center;
  &:hover {
    box-shadow: 13px 13px 0px 2px var(--secondary);
  }
  & a {
    color: var(--black);
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
    height: 200px;
    object-fit: cover;
  }
`

export const StyledProductDetails = styled.div`
  margin: 8px 0;
`
