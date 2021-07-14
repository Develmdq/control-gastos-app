import React, { useState } from 'react';
import { H1, Body, Body2, Inputs, Outputs} from "./Styles";
import QuestionAvailableMoney from "./components/QuestionAvailableMoney";
import AddExpenses from "./components/AddExpenses";
import DetailExpense from "./components/DetailExpense";
import Control from "./components/Control"

function App() {
 
  const [availableMoney, setAvailableMoney] = useState(0)
  const [remainingMoney, setRemainingMoney] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [spending, setSpending] = useState({});
  const [createSpending, setCreateSpending] = useState(false)
  

  console.log(availableMoney)
  console.log(remainingMoney)
   return (
     <>
       <header>
         <H1>Control de Gastos</H1>
       </header>

       {showQuestion ? (
         <Body>
           <QuestionAvailableMoney
             availableMoney={availableMoney}
             remainingMoney={remainingMoney}
             setAvailableMoney={setAvailableMoney}
             setRemainingMoney={setRemainingMoney}
             setShowQuestion={setShowQuestion}
           />
         </Body>
       ) : (
         <Body2>
           <Inputs>
             <AddExpenses
               setSpending={setSpending}
               setCreateSpending={setCreateSpending}
             />
             <Control
               availableMoney={availableMoney}
               remainingMoney={remainingMoney}
               createSpending={createSpending}
               expenses={expenses}
               spending={spending}
               setSpending={setSpending}
               setExpenses={setExpenses}
               setRemainingMoney={setRemainingMoney}
               setCreateSpending={setCreateSpending}
             />
           </Inputs>
           <Outputs>
             <DetailExpense expenses={expenses} />
           </Outputs>
         </Body2>
       )}
     </>
   );
}

export default App;
