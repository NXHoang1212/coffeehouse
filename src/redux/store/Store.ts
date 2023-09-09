import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/ProductSlices';
import { ApiProducts } from '../../service/api/IndexProducts';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import UserReducer from '../slices/AuthSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig: any = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, UserReducer);

const store = configureStore({
    reducer: {
        product: ProductReducer,
        [ApiProducts.reducerPath]: ApiProducts.reducer, //đây là reducer của api endpoint [ApiProducts]
        user: persistedReducer,
    },

    //đây là middleware của api endpoint [ApiProducts]
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat(ApiProducts.middleware)
    },
});

setupListeners(store.dispatch);


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;;
export const persistor = persistStore(store);