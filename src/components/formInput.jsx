export default function FormInputs (props){
    return <div id="user-input" >
    <div className="input-group" >
      <div>
        <label htmlFor="investment">INITIAL INVESTMENT</label>
        <input onChange={props.onChange} type="number" id="initialInvestment" defaultValue={0} value={props.userInput.initialInvestment} />
      </div>
      <div >
        <label htmlFor="annualinvestment">ANNUAL INVESTMENT</label>
        <input onChange={props.onChange} type="number" id="annualInvestment" defaultValue={0} value={props.userInput.annualInvestment} />
      </div>
    </div>
    <div className="input-group" >
      <div>
        <label htmlFor="returnmoney">EXPECTED RETURN</label>
        <input onChange={props.onChange} type="number" id="expectedReturn" defaultValue={0} value={props.userInput.expectedReturn} />
      </div>
      <div >
        <label htmlFor="money">DURATION</label>
        <input onChange={props.onChange} type="number" id="duration" defaultValue={0} value={props.userInput.duration} />
      </div>
    </div>
  </div>
}