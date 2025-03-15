export default function TableResult (props){
    return (<table id="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment value</th>
        <th>Interst (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>

    <tbody>
      {props.result}
    </tbody>
  </table>)
}