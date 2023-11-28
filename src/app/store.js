import { configureStore } from '@reduxjs/toolkit';
import navSwitchReducer from '../features/nav/navSwitchSlice'

export const store = configureStore({
  reducer: {
    navSwitch:navSwitchReducer,
  },
});
