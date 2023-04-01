import React from "react";
import * as C from "./styles";

export const CardPrice = () => {
  return (
    <C.Container>
      <C.FormContainer>
        <C.Label htmlFor="price">Digite a cotação:</C.Label>
        <C.Input
          type="number"
          name="price"
          id="price"
          placeholder="Digite a cotação..."
        />
      </C.FormContainer>
      <C.Button>Converter</C.Button>
    </C.Container>
  );
};
