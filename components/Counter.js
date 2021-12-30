import { useAppContext } from '../state'

export default function Counter({ cartItems }) {
  const { count, setCount } = useAppContext()
  return (
    <div>
      <span>{count}</span>
    </div>
  )
}
