import React from "react";
import { NativeBaseProvider } from "native-base";
import OpenScreenNavigate from "./src/navigations/Open/OpenScreenNavigate";
import { SSRProvider } from "react-aria";

export default function App() {
  return (
    <SSRProvider>
      <NativeBaseProvider>
        <OpenScreenNavigate />
      </NativeBaseProvider>
    </SSRProvider>
  );
}
