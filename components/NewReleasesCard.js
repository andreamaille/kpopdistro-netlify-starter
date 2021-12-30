import Link from 'next/link'

import {
  StyledNewReleasesCard,
  StyledImgContainer,
  StyledProductDetails,
  StyledLink,
} from './NewReleasesCard.style.js'

export default function ProductListing({ product, flexDirection }) {
  const image = product.images.edges[0].node
  return (
    <StyledNewReleasesCard flexDirection={flexDirection}>
      <StyledImgContainer>
        <img src={image.src} alt={image.altText} />
      </StyledImgContainer>

      <StyledProductDetails>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>
          {product.tags} - $ {product.priceRange.minVariantPrice.amount}
        </p>
        <Link href={`/product/${product.handle}`}>
          <StyledLink>Buy Now ></StyledLink>
        </Link>
      </StyledProductDetails>
    </StyledNewReleasesCard>
  )
}
