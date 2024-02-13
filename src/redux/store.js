import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'



export const store = configureStore({
  // export as default and we are going to call it and pass in an object and that 
  // object is just going to have one key which is the reducers, and right now thats going to be empty 
  reducer: {
    counter: counterReducer
  },
})
