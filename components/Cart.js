import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../state'
import CartTable from './CartTable'
import CartTotal from './CartTotal'

export default function Cart() {
  const [showProducts, setShowProducts] = useState(true)
  const [products, setProducts] = useState([])
  const [cost, setCost] = useState({})
  const { cartId, setCartId } = useAppContext()

  useEffect(() => {
    const localCart = cartId
    let data

    if (localCart === null) {
      setShowProducts(false)
    } else {
      setCartId(localCart)

      data = fetch(`${process.env.NETLIFY_URL}/.netlify/functions/get-cart`, {
        method: 'post',
        body: JSON.stringify({
          cartId: localCart,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(response => {
          setProducts(response?.cart?.lines.edges)
          setCost(response?.cart?.estimatedCost)
          return response
        })
    }
  }, [cartId, setCartId])

  return (
    <div>
      {showProducts && products?.length > 0 ? (
        <div>
          <CartTable
            cartItems={products}
            cartId={cartId}
            removeItem={setProducts}
          />
          <CartTotal cost={cost} />
        </div>
      ) : (
        <StyledCartContainer>
          <p>No products to show! Get shopping!</p>
          <img src="/empty-cart.gif" alt="" />
        </StyledCartContainer>
      )}
    </div>
  )
}

const StyledCartContainer = styled.div`
  text-align: center;
  margin: 16px 0;
  & p {
    margin: 22px 0;
  }

  & img {
    margin: 0 auto;
  }
`
