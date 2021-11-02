import Link from 'next/link'

import {
  StyledNewReleasesCard,
  StyledImgContainer,
  StyledProductDetails,
} from './NewReleasesCard.style.js'

export default function ProductListing({ product }) {
  const image = product.images.edges[0].node
  return (
    <StyledNewReleasesCard>
      <div>
        <Link href={`/product/${product.handle}`}>
          <a>
            <StyledImgContainer>
              <img src={image.src} alt={image.altText} />
            </StyledImgContainer>
          </a>
        </Link>
      </div>
      <div>
        <h3>
          {product.title} - {product.tag}
        </h3>
        <StyledProductDetails>
          <p>$ {product.priceRange.minVariantPrice.amount}</p>
        </StyledProductDetails>
      </div>
    </StyledNewReleasesCard>
  )
}
