import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../services/counterSlice'
import {dogsApiSlice} from '../services/dogsApiSlice'
import {usersApiSlice } from '../services/usersApiSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApiSlice.middleware).concat(dogsApiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>



