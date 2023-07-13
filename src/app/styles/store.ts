import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../reducers/Navbar/navbar.slice';
import thunkMiddleware from 'redux-thunk'


const store = configureStore({
    reducer:{
        navbar: navbarReducer,
    },
    middleware: [thunkMiddleware]

});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;