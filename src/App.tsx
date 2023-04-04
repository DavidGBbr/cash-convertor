import React from "react";
import { CardContainer } from "./components/CardContainer";
import { ContextProvider } from "./context";

const App = () => {
  return (
    <ContextProvider>
      <CardContainer />
    </ContextProvider>
  );
};

export default App;
