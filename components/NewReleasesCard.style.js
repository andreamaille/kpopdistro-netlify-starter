import styled from 'styled-components'

export const StyledNewReleasesCard = styled.div`
  display: flex;
  margin-bottom: 24px;

  & div:first-child {
    width: 30%;
    background-color: var(--highlight);
    padding: 16px;
  }
  & div:last-child {
    width: 70%;
    text-align: left;
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
