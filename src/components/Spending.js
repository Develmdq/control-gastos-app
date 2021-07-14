import { Tr, Td } from "../Styles";

const Spending = ({ spending }) => (
  <>
    
      <Tr>
        <Td textAlign="left">{spending.nameExpense}</Td>
        <Td>{spending.spentMoney} $</Td>
      </Tr>
    
  </>
);


export default Spending;
