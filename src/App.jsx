import { useState } from "react"
import { calculateInvestmentResults, formatter } from "./util/investment"
import TableResult from "./components/tableResult";
import FormInputs from "./components/formInput";
import Header from "./components/Header";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })
  let totalIntest = 0;
  let totalInvestedCapital = 0;

  const tableResult = calculateInvestmentResults(userInput).map((item, index) => {
    totalIntest = totalIntest + item.interest;
    totalInvestedCapital = item.valueEndOfYear - totalIntest;
    return <tr key={index + Math.random()}>
      <td>{item.year}</td>
      <td>{formatter.format(item.valueEndOfYear)}</td>
      <td>{formatter.format(item.interest)}</td>
      <td>{formatter.format(totalIntest)}</td>
      <td>{formatter.format(totalInvestedCapital)}</td>
    </tr>
  })

  const handleOnChange = (e) => {
    let key = e.target.id;
    let value = +e.target.value;
    setUserInput(prev => {
      return { ...prev, [key]: value }
    })
  }

  return (
    <>
      <Header />
      <FormInputs onChange={handleOnChange} userInput={userInput} />
      <TableResult result={tableResult} />
    </>
  )
}

export default App
