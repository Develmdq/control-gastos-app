import { Tr, Td } from "../Styles";
import PropTypes from 'prop-types';

const Spending = ({ spending }) => (
      <Tr>
        <Td textAlign="left">{spending.nameExpense}</Td>
        <Td>{spending.spentMoney} $</Td>
      </Tr>
);


Spending.propTypes = {
  spending: PropTypes.object.isRequired
}

export default Spending;
