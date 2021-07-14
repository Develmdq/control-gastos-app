import React, {  useEffect } from "react";
import { P, Span } from "../Styles";

const Control = ({
  availableMoney,
  remainingMoney,
  createSpending,
  expenses,
  setExpenses,
  spending,
  setRemainingMoney,
  setCreateSpending,
}) => {
  let backgroundConditional;
  if (availableMoney / 4 > remainingMoney) {
    backgroundConditional = "#FF000070";
  } else if (availableMoney / 2 > remainingMoney) {
    backgroundConditional = "#FFFF0080";
  } else {
    backgroundConditional = "#66990080";
  }

  useEffect(() => {
    createSpending && setExpenses([...expenses, spending]);

    const remaining = remainingMoney - spending.spentMoney;

    setRemainingMoney(remaining);
    setCreateSpending(false);
  }, [spending]);


  return (
    <>
      <P background="#3e3e4b20">
        Monto Inicial: <Span color="green">&nbsp; {availableMoney} $</Span>
      </P>
      <P background={backgroundConditional}>
        Monto Restante:
        <Span>&nbsp; {remainingMoney} $</Span>
      </P>
    </>
  );
};

export default Control;
