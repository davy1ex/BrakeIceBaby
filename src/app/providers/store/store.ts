import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import storage from 'redux-persist/lib/storage'

import authSlice from "../../../features/auth/models/authSlice";



const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers(
    {
        auth: authSlice,
    }
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types from Redux-Persist
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});


export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
