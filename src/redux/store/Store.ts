import { configureStore, createImmutableStateInvariantMiddleware, } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import ProductReducer from '../slices/ProductSlices';
import AddressReducer from '../slices/AddressSlice';
import CartReducer from '../slices/CartSlice';
import MethodAmountReducer from '../slices/MethodAmountSlice';
import { ApiProducts } from '../../service/api/IndexProducts';
import { ApiAddress } from '../../service/api/IndexAddress';
import { ApiCart } from '../../service/api/IndexCart';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import UserReducer from '../slices/AuthSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnyAction, CombinedState, Reducer } from 'redux';
import { RTKQueryLogger } from '../middleware/RTKQuery.logger';
import { ApiFavourites } from '../../service/api/IndexFavourites';
<<<<<<< HEAD
=======


>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
const persistConfig: any = {
    key: 'root',
    storage: AsyncStorage,
}

<<<<<<< HEAD
const rootReducer: Reducer<CombinedState<{ product: any; user: any; methodamount: any; }>, AnyAction> = combineReducers({
    user: UserReducer,
    product: ProductReducer,
    methodamount: MethodAmountReducer,
=======
const rootReducer: Reducer<CombinedState<{ product: any; user: any; methodamount: any; cart: any }>, AnyAction> = combineReducers({
    user: UserReducer,
    product: ProductReducer,
    methodamount: MethodAmountReducer,
    cart: CartReducer,
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
});

const persistedReducer = persistReducer(persistConfig, rootReducer);




const store = configureStore({
    reducer: {
        product: persistedReducer,
        [ApiProducts.reducerPath]: ApiProducts.reducer,
        address: AddressReducer,
        [ApiAddress.reducerPath]: ApiAddress.reducer,
        user: persistedReducer,
<<<<<<< HEAD
        cart: CartReducer,
=======
        cart: persistedReducer,
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
        methodamount: persistedReducer,
        [ApiCart.reducerPath]: ApiCart.reducer,
        [ApiFavourites.reducerPath]: ApiFavourites.reducer,
    },
<<<<<<< HEAD
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: {
            ignoredPaths: ['product', 'user', 'methodamount', 'address', 'cart'],
        }
    }).concat( ApiProducts.middleware, ApiAddress.middleware, ApiCart.middleware, ApiFavourites.middleware, RTKQueryLogger),
=======
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }).concat(ApiProducts.middleware, ApiAddress.middleware, ApiCart.middleware, ApiFavourites.middleware, RTKQueryLogger),
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
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