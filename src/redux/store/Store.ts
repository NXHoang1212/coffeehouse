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

const persistConfig: any = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  isLoggedIn: IsLoggedInReducer,
  user: UserReducer,
  cart: CartReducer,
  methodamount: MethodAmountReducer,
  applyPromodiscount: ApplyPromodiscountReducer,
  recommend: ProductSuggest,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


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

