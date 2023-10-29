import { configureStore, createImmutableStateInvariantMiddleware, } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import ProductReducer from '../slices/ProductSlices';
import AddressReducer from '../slices/AddressSlice';
import CartReducer from '../slices/CartSlice';
import MethodAmountReducer, { MethodAmountState } from '../slices/MethodAmountSlice';
import { ApiProducts } from '../../service/api/IndexProducts';
import { ApiAddress } from '../../service/api/IndexAddress';
import { ApiCart } from '../../service/api/IndexCart';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import UserReducer from '../slices/AuthSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RTKQueryLogger } from '../middleware/RTKQuery.logger';
import { ApiFavourites } from '../../service/api/IndexFavourites';

const persistConfig: any = {
    key: 'root',
    storage: AsyncStorage,
}


const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    methodamount: MethodAmountReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        product: ProductReducer,
        [ApiProducts.reducerPath]: ApiProducts.reducer,
        address: AddressReducer,
        [ApiAddress.reducerPath]: ApiAddress.reducer,
        user: persistedReducer,
        cart: persistedReducer,
        methodamount: persistedReducer,
        [ApiCart.reducerPath]: ApiCart.reducer,
        [ApiFavourites.reducerPath]: ApiFavourites.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }).concat(ApiProducts.middleware, ApiAddress.middleware, ApiCart.middleware, ApiFavourites.middleware, RTKQueryLogger),
});

setupListeners(store.dispatch);


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export const resetStore = async () => {
    await persistor.purge();
    store.dispatch({ type: 'RESET' });
    await persistor.flush();
};