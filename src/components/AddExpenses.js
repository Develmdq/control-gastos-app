import React, { useState } from "react";
import { H2, Input, InputBtn } from "../Styles";
import Swal from "sweetalert2";
import shortid from "shortid";
import PropTypes from 'prop-types';

const AddExpenses = ({ setSpending, setCreateSpending }) => {
  const [nameExpense, setNameExpense] = useState("");
  const [spentMoney, setSpentMoney] = useState("");
 

  const addExpense = (e) => {
    e.preventDefault();

    if (nameExpense === "" || spentMoney <= 0 ) {
      Swal.fire({
        icon: "error",
        title: "Ingrese un nombre y un monto válido",
        text: "No pueden quedar campos vacíos",
      });
      return;
    }

    const spending = {
      nameExpense,
      spentMoney,
      id: shortid.generate(),
    };

    setSpending(spending);
    setCreateSpending(true);
    setNameExpense("");
    setSpentMoney("");

  };
  return (
    <>
      <H2>Ingreso de Gastos</H2>
      <form onSubmit={addExpense}>
        <label>Nombre del gasto</label>
        <Input
          width="60%"
          height="25px"
          type="text"
          placeholder={"Ej. Supermercado"}
          name="nameExpense"
          value={nameExpense}
          onChange={(e) => setNameExpense(e.target.value)}
        />
        <br />
        <label>Cantidad del gasto</label>
        <Input
          width="60%"
          height="25px"
          type="number"
          name="spentMoney"
          value={spentMoney}
          placeholder={"Ej. 200"}
          onChange={(e) => setSpentMoney(parseFloat(e.target.value, 10))}
        />
        <InputBtn
          width="85%"
          height="38px"
          type="submit"
          value="Agregar Gasto"
        />
      </form>
    </>
  );
};

AddExpenses.propTypes = {
  setSpending: PropTypes.func.isRequired,
  setCreateSpending: PropTypes.func.isRequired
}

export default AddExpenses;
