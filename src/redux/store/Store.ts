import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import LoadingReducer from '../slices/IsLoadingSlice';
import UserReducer from '../slices/AuthSlice';
import ProductReducer from '../slices/ProductSlices';
import AddressReducer from '../slices/AddressSlice';
import CartReducer from '../slices/CartSlice';
import IsLoggedInReducer from '../slices/IsLoggedIn';
import MethodAmountReducer from '../slices/MethodAmountSlice';
import DiscountReducer from '../slices/DiscountSlice';
import ApplyPromodiscountReducer from '../slices/ApplyPromodiscount';
import ProductSuggest from '../slices/ProductSuggestSlice';

import { ApiAddress } from '../../service/api/IndexAddress';
import { ApiCart } from '../../service/api/IndexCart';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ApiFavourites } from '../../service/api/IndexFavourites';
import { Apidiscount } from '../../service/api/IndexDiscount';
import { ApiOrder } from '../../service/api/IndexOrder';
import { ApiBanner, ApiCategory } from '../../service/api/IndexBanner&Category';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RTKQueryLogger } from '../middleware/RTKQuery.logger';
<<<<<<< HEAD
import { ApiFavourites } from '../../service/api/IndexFavourites';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
import { Apidiscount } from '../../service/api/IndexDiscount';
import { ApiOrder } from '../../service/api/IndexOrdert';
>>>>>>> main
=======
>>>>>>> main

>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
const persistConfig: any = {
  key: 'root',
  storage: AsyncStorage,
};

<<<<<<< HEAD
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
=======
const rootReducer = combineReducers({
  isLoggedIn: IsLoggedInReducer,
  user: UserReducer,
  cart: CartReducer,
  methodamount: MethodAmountReducer,
  applyPromodiscount: ApplyPromodiscountReducer,
<<<<<<< HEAD
>>>>>>> main
=======
  recommend: ProductSuggest,
>>>>>>> main
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


<<<<<<< HEAD


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
=======
const store = configureStore({
  reducer: {
    isLoading: LoadingReducer,
    root: persistedReducer,
    product: ProductReducer,
    address: AddressReducer,
    discount: DiscountReducer,
    [ApiAddress.reducerPath]: ApiAddress.reducer,
    [ApiCart.reducerPath]: ApiCart.reducer,
    [ApiFavourites.reducerPath]: ApiFavourites.reducer,
    [Apidiscount.reducerPath]: Apidiscount.reducer,
    [ApiOrder.reducerPath]: ApiOrder.reducer,
    [ApiBanner.reducerPath]: ApiBanner.reducer,
    [ApiCategory.reducerPath]: ApiCategory.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    })
      .concat(ApiAddress.middleware)
      .concat(ApiCart.middleware)
      .concat(ApiFavourites.middleware)
      .concat(Apidiscount.middleware)
      .concat(ApiOrder.middleware)
      .concat(ApiBanner.middleware)
      .concat(ApiCategory.middleware)
      .concat(RTKQueryLogger)
>>>>>>> main
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

