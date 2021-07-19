import React, { useState,  useEffect } from 'react';
import { H1, Body, Main, Main2, Inputs, Outputs} from "./Styles";
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
  const [createSpending, setCreateSpending] = useState(false);

  // Actualizar restante
  useEffect(() => {

    if (createSpending) {

    setExpenses([...expenses, spending]);
    const remaining = remainingMoney - spending.spentMoney;

    setRemainingMoney(remaining);
    setCreateSpending(false);
    }

    
  }, [spending, createSpending, expenses, remainingMoney]);
  
   return (
     <Body className='body'>
         <H1>Control de Gastos</H1>
       {showQuestion ? (
         <Main className='main1'>
           <QuestionAvailableMoney
             availableMoney={availableMoney}
             remainingMoney={remainingMoney}
             setAvailableMoney={setAvailableMoney}
             setRemainingMoney={setRemainingMoney}
             setShowQuestion={setShowQuestion}
           />
         </Main>
       ) : (
         <Main2 className='main2'>
           <Inputs className='ingreso'>
             <AddExpenses
               setSpending={setSpending}
               setCreateSpending={setCreateSpending}
             />
             <Control
               availableMoney={availableMoney}
               remainingMoney={remainingMoney}               
             />
           </Inputs>
           <Outputs className='egreso'>
             <DetailExpense expenses={expenses} />
           </Outputs>
         </Main2>
       )}
     </Body>
   );
}

export default App;
