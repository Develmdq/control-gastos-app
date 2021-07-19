import { H2, Table, Th } from "../Styles";
import Spending from "./Spending";
import PropTypes from 'prop-types';

const DetailExpense = ({ expenses }) => (
  <>
    <H2>Detalle de Gastos</H2>
    <Table>
      <thead>
        <tr>
          <Th width="300px">Nombre del Gasto</Th>
          <Th width="95px">Monto</Th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((spending) => (
          <Spending key={spending.id} spending={spending} />
        ))}
      </tbody>
    </Table>
  </>
);


DetailExpense.propTypes = {
  expenses: PropTypes.array.isRequired
}

export default DetailExpense;
