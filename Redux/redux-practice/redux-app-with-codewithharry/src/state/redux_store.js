import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'persist-store',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const redux_store = createStore(persistedReducer, {}, applyMiddleware(thunk))
export const persistor = persistStore(redux_store);
