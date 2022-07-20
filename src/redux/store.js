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
// import {authReducer} from './'
// import storage from 'redux-persist/lib/storage';

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

export const store = configureStore({
  reducer: {
    contacts: contactReducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// export let persistor = persistStore(store);
