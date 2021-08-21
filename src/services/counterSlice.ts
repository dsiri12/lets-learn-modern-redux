import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
}

const conterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // allow to mutate the state due to immer

    incremented: (state) => {
      state.value ++
    },

    decremented: (state) => {
      state.value --
    },

    amountAdded: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  }
})

export const { incremented, decremented, amountAdded } = conterSlice.actions

export default conterSlice.reducer