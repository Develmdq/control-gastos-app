import { H2, Table, Th } from "../Styles";
import Spending from "./Spending";

const DetailExpense = ({ expenses }) => (
  <>
    <H2>Detalle de Gastos</H2>
    <Table>
      <thead>
        <tr>
          <Th width="400px">Nombre del Gasto</Th>
          <Th width="115px">Monto</Th>
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

export default DetailExpense;
