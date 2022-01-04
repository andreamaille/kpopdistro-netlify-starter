import { useEffect, useState } from 'react'
import { formatPrice } from '../utilityFunctions'
import { useAppContext } from '../state'
import {
  StyledProductPage,
  StyledProductImgContainer,
  StyledProductContent,
  StyledAddedToCart,
} from './ProductPage.style.js'

function getCurrentVariantObject(vars, id) {
  return vars.filter(v => v.node.id === id)[0]
}

function VariantForm({ vars, current, pick, setQ }) {
  return (
    <form className="addToCart">
      {vars.length > 1 &&
        vars.map((v, index) => (
          <div className="product-page-price" key={`variant${index}`}>
            <label>
              <input
                name="Product Variant"
                type="radio"
                id={v.node.id}
                defaultChecked={index === 0}
                onChange={() => {
                  pick(v.node.id)
                }}
              />
              {` ${v.node.title}`}
            </label>
            <br />
          </div>
        ))}
      <input
        type="number"
        placeholder="Quantity"
        defaultValue={1}
        min={1}
        max={getCurrentVariantObject(vars, current).node.quantityAvailable}
        onChange={e => {
          setQ(parseInt(e.target.value))
        }}
      />
    </form>
  )
}

export default function ProductPageContent({ product }) {
  const vars = product.variants.edges

  // Chosen variant ID
  const [chosenVariant, setChosenVariant] = useState(vars[0].node.id)
  // Quantity of the chosen variant
  const [quantity, setQuantity] = useState(1)
  // Cost of the chosen variant
  const [cost, setCost] = useState('')

  const { cartId, setCartId } = useAppContext()

  const { count, setCount } = useAppContext()

  const [banner, showBanner] = useState(false)

  useEffect(() => {
    const variantPrice = getCurrentVariantObject(vars, chosenVariant).node
      .priceV2.amount

    setCost(formatPrice(variantPrice * quantity))
  }, [chosenVariant, quantity, cost, vars])

  const image = product.images.edges[0].node

  const handleAddToCart = async () => {
    console.log('--- Adding to cart ---')

    const body = {
      cartId: cartId || '',
      itemId: chosenVariant,
      quantity,
    }

    const cartResponse = await fetch(
      `${process.env.NETLIFY_URL}/.netlify/functions/add-to-cart`,
      {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }
    )

    const data = await cartResponse.json()
    setCartId(data.id)
    showBanner(true)

    setCount(count + quantity)

    return data
  }

  return (
    <StyledProductPage>
      <StyledProductImgContainer>
        <img src={image.src} alt={image.altText} />
      </StyledProductImgContainer>

      <StyledProductContent>
        <h2>
          {product.title} - {product.tags}
        </h2>
        <p>
          <span>{cost}</span>
        </p>
        <p>{product.description}</p>

        <VariantForm
          vars={vars}
          current={chosenVariant}
          pick={setChosenVariant}
          setQ={setQuantity}
        />

        {product.totalInventory > 0 ? (
          <button onClick={handleAddToCart}>Add to Cart</button>
        ) : (
          <button disabled>Out of Stock</button>
        )}

        {banner && (
          <StyledAddedToCart>
            Item has been added to your cart!
          </StyledAddedToCart>
        )}
      </StyledProductContent>
    </StyledProductPage>
  )
}
