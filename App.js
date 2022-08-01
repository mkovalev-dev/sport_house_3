import React from "react";
import { NativeBaseProvider } from "native-base";
import OpenScreenNavigate from "./src/navigations/Open/OpenScreenNavigate";

export default function App() {
  return (
    <NativeBaseProvider>
      <OpenScreenNavigate />
    </NativeBaseProvider>
  );
}
