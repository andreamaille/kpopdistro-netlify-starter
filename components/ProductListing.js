import Link from 'next/link'

import {
  StyledProductListing,
  StyledImgContainer,
  StyledProductDetails,
} from './ProductListing.style'

export default function ProductListing({ product }) {
  const image = product.images.edges[0].node
  return (
    <StyledProductListing>
      <Link href={`/product/${product.handle}`}>
        <a>
          <h3>{product.title}</h3>
          <StyledImgContainer>
            <img src={image.src} alt={image.altText} />
          </StyledImgContainer>
          <StyledProductDetails>
            <p>{product.tags[0]}</p>
            <p>$ {product.priceRange.minVariantPrice.amount}</p>
          </StyledProductDetails>
        </a>
      </Link>
    </StyledProductListing>
  )
}
