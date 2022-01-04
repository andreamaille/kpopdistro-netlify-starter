import styled from 'styled-components'

export const StyledProductListing = styled.li`
  background-color: var(--highlight);
  padding: 16px;
  text-align: center;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    width: 44%;
  }
  @media (min-width: 1024px) {
    width: 27%;
  }

  &:hover {
    box-shadow: 13px 13px 0px 2px var(--secondary);
  }
  & a {
    color: var(--black);
  }

  & h2 {
    margin-bottom: 8px;
    font-size: var(--font-size-base);
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
  & p {
    font-weight: 500;
  }
`
