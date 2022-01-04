import styled from 'styled-components'

function formatPrice(num, currency) {
  if (num === null) {
    return '$0.00'
  }
  return parseFloat(num).toLocaleString('en-US', {
    style: 'currency',
    currency: currency || 'USD',
  })
}

export default function CartTotal({ cost }) {
  let subtotal
  let tax
  let total

  console.log(cost)

  subtotal = formatPrice(
    cost?.subtotalAmount?.amount,
    cost?.subtotalAmount?.currency
  )
  tax = formatPrice(
    cost?.totalTaxAmount?.amount,
    cost?.totalTaxAmount?.currency
  )
  total = formatPrice(cost?.totalAmount?.amount, cost?.totalAmount?.currency)

  return (
    <div>
      <StyledCartTotal>
        <div>
          <div>
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p>Total:</p>
          </div>
          <div>
            <p>
              <strong>{subtotal}</strong>
            </p>
            <p>Free Shipping</p>
            <p>{total}</p>
          </div>
        </div>
      </StyledCartTotal>
    </div>
  )
}

const StyledCartTotal = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;

  > div {
    display: flex;
  }

  > div div:first-child {
    text-align: right;
    margin-right: 10px;
  }

  > div div:last-child {
    text-align: right;
  }
`
