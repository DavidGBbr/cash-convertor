import React, { useContext, useState } from "react";
import * as C from "./styles";
import { Context } from "../../context";

export const CardPrice = () => {
  const { patrimony, price, setPrice, setConverted } = useContext(Context);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(event.target.value);
    setPrice(newPrice);
  };

  const handlePatrimony = () => {
    if (patrimony && price) {
      setConverted(Number(patrimony) / Number(price));
    }
  };
  return (
    <C.Container>
      <C.FormContainer>
        <C.Label htmlFor="price">Digite a cotação:</C.Label>
        <C.Input
          type="number"
          name="price"
          id="price"
          placeholder="Digite a cotação..."
          value={price || ""}
          onChange={handlePriceChange}
        />
      </C.FormContainer>
      <C.Button onClick={handlePatrimony}>Converter</C.Button>
    </C.Container>
  );
};
