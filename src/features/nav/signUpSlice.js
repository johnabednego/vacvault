import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const signUpSlice = createSlice({
    name: 'signUpModal',
    initialState,
    reducers: {
      SignUpTrue:(state)=>{
        state.value=true
      },
      SignUpFalse:(state)=>{
        state.value=false
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { SignUpTrue, SignUpFalse} = signUpSlice.actions
  
  export default signUpSlice.reducer