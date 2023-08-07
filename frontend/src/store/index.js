import { configureStore } from '@reduxjs/toolkit'
import simulationReducer from './features/simulationSlice'

export const store = configureStore({
  reducer: {
    //here we declare the reducers
   simulation: simulationReducer,
  },
})