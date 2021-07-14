import React, {useState} from 'react';
import { H2, Input, InputBtn } from "../Styles";
import Swal from "sweetalert2";


const QuestionAvailableMoney = ({
  availableMoney,
  remainingMoney,
  setRemainingMoney,
  setAvailableMoney,
  setShowQuestion,
}) => {
  const defineAvailable = (e) => {
    setAvailableMoney(parseFloat(e.target.value));
    e.target.value && setBtnActive(false)
  };

  const addAvailable = (e) => {
    e.preventDefault();
    if (availableMoney <= 0 || isNaN(availableMoney)) {
      Swal.fire({
        icon: "error",
        title: "Valor Incorrecto !!",
        text: "Ingrese un monto válido",
      });
      return;
    }

    setShowQuestion(false);
    setRemainingMoney(remainingMoney);
    setAvailableMoney(availableMoney);
  };

  const [btnActive, setBtnActive] = useState(true)

  return (
    <>
      <H2>Ingrese Monto Disponible</H2>
      <form onSubmit={addAvailable}>
        <Input
          width="60%"
          height="25px"
          type="number"
          placeholder={availableMoney}
          onChange={defineAvailable}
        />
        <InputBtn
          width="65%"
          height="38px"
          type="submit"
          value="Ingresar Cantidad"
          ok={btnActive}
          disabled={btnActive}
        />
      </form>
    </>
  );
};

export default QuestionAvailableMoney;
