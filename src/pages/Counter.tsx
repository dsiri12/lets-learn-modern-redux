import { useAppDispatch, useAppSelector } from '../app/hooks'
import { incremented, decremented, amountAdded} from '../services/counterSlice'

const Counter = () => {
  const count = useAppSelector((state) => { return state.counter.value })
  const dispatch = useAppDispatch()
  
  const incrementHandler = () => {
    dispatch( incremented())
  }

  const decrementHandler = () => {
     dispatch( decremented())
  }

  const amountAddedHandler = () => {
    dispatch(amountAdded(10))
  }

  return (
    <div>
      <h3>Count: {count}</h3>

      <button type='button' onClick={incrementHandler}>Increment</button>

      <button type='button' onClick={decrementHandler}>Decrement</button>
      
      <button type='button' onClick={amountAddedHandler}>Increment By 10</button>
      
    </div>
  )
}

export default Counter
