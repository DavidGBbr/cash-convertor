import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import * as C from "./styles";
export const CardPatrimony = () => {
  return (
    <C.Container>
      <C.Logo>
        <FaRegMoneyBillAlt />
        Cash Convertor
      </C.Logo>
      <C.FormContainer>
        <C.Label htmlFor="patrimony">Digite seu patrimônio:</C.Label>
        <C.Input
          type="number"
          name="patrimony"
          id="patrimony"
          placeholder="Digite seu Valor..."
        />
      </C.FormContainer>
      <p>O valor do seu patrimônio convertido é:</p>
      <C.Result>R$ 0,00</C.Result>
    </C.Container>
  );
};
