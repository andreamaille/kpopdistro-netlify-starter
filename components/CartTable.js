import { formatPrice, itemTotal } from '../utilityFunctions'
import { useAppContext } from '../state'
import { StyledCartTable } from './CartTable.style'

export default function CartTable({ cartItems, cartId, removeItem }) {
  const { setCount } = useAppContext()

  const removeItemFromCart = itemId => {
    fetch(`${process.env.NETLIFY_URL}/.netlify/functions/remove-from-cart`, {
      method: 'POST',
      body: JSON.stringify({
        cartId,
        lineId: itemId,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log('--- Item deleted ---')
        console.log('RESPONSE', response.lines.edges)

        removeItem(response.lines.edges)

        const remainingProducts = response.lines.edges

        let total = 0

        remainingProducts.forEach(product => {
          total += product.node.quantity
        })

        setCount(total)
        return response
      })
  }

  return (
    <StyledCartTable>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => {
          item = item.node
          const image = item.merchandise.product.images.edges[0].node
          const merchandiseTitle =
            item.merchandise.title === 'Default Title'
              ? ''
              : `(${item.merchandise.title})`
          return (
            <tr key={`cartItem${index}`}>
              <td>
                <img src={image.src} alt="" />
                <div>
                  {item.merchandise.product.title} {merchandiseTitle}
                  <span>
                    {item.quantity} x&nbsp;
                    {formatPrice(
                      item.merchandise.priceV2.amount,
                      item.merchandise.priceV2.currencyCode
                    )}
                  </span>
                </div>
              </td>
              <td>
                {formatPrice(
                  item.merchandise.priceV2.amount,
                  item.merchandise.priceV2.currencyCode
                )}
              </td>
              <td>{item.quantity}</td>
              <td>{itemTotal(item.merchandise.priceV2, item.quantity)}</td>
              <td>
                <button
                  onClick={() => {
                    removeItemFromCart(item.id)
                  }}
                >
                  Remove Item
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </StyledCartTable>
  )
}
