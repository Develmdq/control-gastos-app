import { P, Span } from "../Styles";
import PropTypes from 'prop-types';

const Control = ({ availableMoney, remainingMoney }) => {
  
  let backgroundConditional;
  if (availableMoney / 4 > remainingMoney) {
    backgroundConditional = "#FF000070";
  } else if (availableMoney / 2 > remainingMoney) {
    backgroundConditional = "#FFFF0080";
  } else {
    backgroundConditional = "#66990080";
  }

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

Control.propTypes = {
  availableMoney: PropTypes.number.isRequired,
  remainingMoney: PropTypes.number.isRequired
}

export default Control;
