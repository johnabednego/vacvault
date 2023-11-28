import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}


export const navSwitchSlice = createSlice({
    name: 'navSwitch',
    initialState,
    reducers: {
      SetNavSwitch:(state, action)=>{
        state.value=action.payload;
      }
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { SetNavSwitch} = navSwitchSlice.actions
  
  export default navSwitchSlice.reducer