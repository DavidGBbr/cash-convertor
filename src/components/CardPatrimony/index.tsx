import React, { useContext, useState } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import * as C from "./styles";
import { Context } from "../../context";

export const CardPatrimony = () => {
  const { patrimony, setPatrimony, price, converted } = useContext(Context);

  const handlePatrimonyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPatrimony = Number(event.target.value);
    setPatrimony(newPatrimony);
  };

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
          value={patrimony || ""}
          onChange={handlePatrimonyChange}
        />
      </C.FormContainer>
      <p>O valor do seu patrimônio convertido é:</p>
      <C.Result>
        {converted ? (
          converted.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        ) : (
          <span>R$0,00</span>
        )}
      </C.Result>
    </C.Container>
  );
};
