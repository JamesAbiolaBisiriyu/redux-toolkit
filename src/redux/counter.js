import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   // state
//   value: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    count:0
  },
   reducers: {
    // reducers
    increment: (state) => {
      // actions increment, this actions modify the state     
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer