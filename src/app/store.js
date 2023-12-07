import { configureStore } from '@reduxjs/toolkit';
import navSwitchReducer from '../features/nav/navSwitchSlice'
import signInReducer from '../features/nav/signInSlice'
import signUpReducer from '../features/nav/signUpSlice'

export const store = configureStore({
  reducer: {
    navSwitch:navSwitchReducer,
    signInModal:signInReducer,
    signUpModal:signUpReducer,
  },
});
