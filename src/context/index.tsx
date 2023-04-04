import React, { createContext, useState } from "react";

type ContextType = {
  patrimony: number | null;
  setPatrimony: (value: number | null) => void;
  price: number | null;
  setPrice: (value: number | null) => void;
  converted: number;
  setConverted: (value: number) => void;
};

export const Context = createContext<ContextType>({
  patrimony: null,
  setPatrimony: () => {},
  price: null,
  setPrice: () => {},
  converted: 0,
  setConverted: () => {},
});

export const ContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [patrimony, setPatrimony] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [converted, setConverted] = useState(0);

  const contextValue = {
    patrimony,
    setPatrimony,
    price,
    setPrice,
    converted,
    setConverted,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
