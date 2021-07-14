import React, { useState } from "react";
import { H2, Input, InputBtn } from "../Styles";
import Swal from "sweetalert2";
import shortid from "shortid";

const AddExpenses = ({ setSpending, setCreateSpending }) => {
  const [nameExpense, setNameExpense] = useState("");
  const [spentMoney, setSpentMoney] = useState("");
  const [btnActive, setBtnActive] = useState(true);

  const validation = (e) => {
    if (e.target.value === "" || e.target.value <= 0) {
      setBtnActive(true);
      Swal.fire({
        icon: "error",
        title:
          e.target.name === "nameExpense"
            ? "Ingrese un nombre"
            : "Ingrese un monto",
        text:
          e.target.name === "nameExpense" && "No pueden quedar campos vacíos",
      });
      return;
    }
    setBtnActive(false);
  };

  const addExpense = (e) => {
    e.preventDefault();

    if (nameExpense === "") {
      Swal.fire({
        icon: "error",
        title: "Ingrese un nombre",
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
          onBlur={(e) => validation(e)}
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
          onBlur={(e) => validation(e)}
        />
        <InputBtn
          width="85%"
          height="38px"
          type="submit"
          value="Agregar Gasto"
          ok={btnActive}
          disabled={btnActive}
        />
      </form>
    </>
  );
};

export default AddExpenses;
