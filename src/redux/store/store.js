import { configureStore } from '@reduxjs/toolkit';
import authSlicer from '../slice/auth/authSlicer';


const store = configureStore({
    reducer: {
        auth:authSlicer
    },
});

export default store