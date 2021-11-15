import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./products";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "product", "id", "cart"],
};

const rootReducer = combineReducers({
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
