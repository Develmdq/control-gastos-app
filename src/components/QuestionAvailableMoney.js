import React, {useState} from 'react';
import { H2, Input, InputBtn } from "../Styles";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const QuestionAvailableMoney = ({
  availableMoney,
  setRemainingMoney,
  setAvailableMoney,
  setShowQuestion,
}) => {
  
  const [amount, setAmount] = useState(0);
  const [btnActive, setBtnActive] = useState(true)

  const defineAvailable = (e) => {
    setAmount(parseFloat(e.target.value));
    e.target.value && setBtnActive(false)
  };

  const addAvailable = (e) => {
    e.preventDefault();
    if (amount <= 0 || isNaN(amount)) {
      Swal.fire({
        icon: "error",
        title: "Valor Incorrecto !!",
        text: "Ingrese un monto válido",
      });
      return;
    }

    setShowQuestion(false);
    setRemainingMoney(amount);
    setAvailableMoney(amount);
  };

  return (
    <>
      <H2>Ingrese Disponible</H2>
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


QuestionAvailableMoney.propTypes = {
  setRemainingMoney: PropTypes.func.isRequired,
  setAvailableMoney: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired
}

export default QuestionAvailableMoney;
