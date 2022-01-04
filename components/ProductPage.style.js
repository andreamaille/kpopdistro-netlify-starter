import styled from 'styled-components'

export const StyledProductPage = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  & div {
    width: 100%;
    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  img {
    width: 100%;
  }

  h2 {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 50%,
      var(--highlight) 50%
    );
    display: inline;
    width: auto;
    margin-bottom: 16px;
  }

  button {
    border: 2px solid var(--black);
    padding: 8px;
    cursor: pointer;
    display: inline-block;
    background: none;
    &:hover {
      border: 2px solid var(--secondary);
      color: var(--secondary);
    }
  }

  input[type='number'] {
    margin: 16px 0;
  }
`

export const StyledProductImgContainer = styled.div`
  img {
    width: 100%;
  }
`

export const StyledProductContent = styled.div`
  padding: 24px;
  span {
    font-size: var(--font-size-h5);
    font-weight: 500;
    margin: 16px auto;
    display: inline-block;
  }
`

export const StyledAddedToCart = styled.p`
  color: var(--secondary);
  margin-top: 16px;
`
