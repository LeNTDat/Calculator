export default function FormInputs (props){
    return <div id="user-input" >
    <div className="input-group" >
      <p>
        <label htmlFor="investment">INITIAL INVESTMENT</label>
        <input onChange={props.onChange} type="number" id="initialInvestment" min={0}defaultValue={0} value={props.userInput.initialInvestment} />
      </p> 
      <p >
        <label htmlFor="annualinvestment">ANNUAL INVESTMENT</label>
        <input onChange={props.onChange} type="number" id="annualInvestment" min={0}defaultValue={0} value={props.userInput.annualInvestment} />
      </p> 
    </div>
    <div className="input-group" >
      <p>
        <label htmlFor="returnmoney">EXPECTED RETURN</label>
        <input onChange={props.onChange} type="number" id="expectedReturn" min={0}defaultValue={0} value={props.userInput.expectedReturn} />
      </p> 
      <p >
        <label htmlFor="money">DURATION</label>
        <input onChange={props.onChange} type="number" id="duration" min={0}defaultValue={0} value={props.userInput.duration} />
      </p> 
    </div>
  </div>
}