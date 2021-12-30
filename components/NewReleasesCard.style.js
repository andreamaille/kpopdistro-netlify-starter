import styled from 'styled-components'

export const StyledNewReleasesCard = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  margin: 24px 24px 0;
`
export const StyledImgContainer = styled.div`
  width: 50%;
  padding: 24px;
  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`
export const StyledProductDetails = styled.div`
  width: 50%;
  padding: 24px;
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
