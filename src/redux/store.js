import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducers } from './contacts/contacts-reducers';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authSlice from './auth/auth-slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, contactReducers);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts: contactReducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// export let persistor = persistStore(store);
