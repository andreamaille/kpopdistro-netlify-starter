import styled from 'styled-components'

export const StyledNewReleasesCard = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: wrap;
  margin: 24px 24px 0;
  @media (min-width: 1024px) {
    flex-wrap: unset;
  }
`
export const StyledImgContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
    padding: 24px;
  }
  & img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    @media (min-width: 768px) {
      height: 400px;
    }
  }
`
export const StyledProductDetails = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
    padding: 24px;
  }
  & p {
    margin: 16px 0;
    font-weight: 400;
  }
`

export const StyledLink = styled.a`
  border: 2px solid var(--black);
  padding: 8px;
  cursor: pointer;
  display: inline-block;
  &:hover {
    border: 2px solid var(--secondary);
    color: var(--secondary);
  }
`
