import React from "react";
import { CardPatrimony } from "../CardPatrimony";
import { CardPrice } from "../CardPrice";
import * as C from "./styles";

export const CardContainer = () => {
  return (
    <C.Container>
      <CardPatrimony />
      <CardPrice />
    </C.Container>
  );
};
