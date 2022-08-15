import { NativeBaseProvider } from "native-base";
import { SSRProvider } from "react-aria";
import store from "./src/api/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import LoginProvider from "./src/lib/LoginProvider";

const persistor = persistStore(store);

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SSRProvider>
          <NativeBaseProvider config={config}>
            <LoginProvider />
          </NativeBaseProvider>
        </SSRProvider>
      </PersistGate>
    </Provider>
  );
}
