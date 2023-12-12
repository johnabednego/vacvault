import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const signInSlice = createSlice({
    name: 'signInModal',
    initialState,
    reducers: {
      SignInTrue:(state)=>{
        state.value=true
      },
      SignInFalse:(state)=>{
        state.value=false
      },
      // UserSignInTrue:(state)=>{
      //   state.value=true
      // },
      // UserSignInFalse:(state)=>{
      //   state.value=false
      // },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { SignInTrue, SignInFalse} = signInSlice.actions
  
  export default signInSlice.reducer