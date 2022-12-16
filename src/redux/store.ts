import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistUsersConfig = {
  key: 'users',
  storage,
  whitelist: ['firstName']
};

const store = configureStore({
  reducer: {
    users: persistReducer<ReturnType<typeof usersReducer>>(
      persistUsersConfig,
      usersReducer
    )
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
