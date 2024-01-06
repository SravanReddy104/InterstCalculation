import {useLocation} from  "react-router-dom"

const Detail = ()=>{
  const location = useLocation()
  var {username,date,amount} = location.state
  console.log(location)
  console.log(username,date,amount)
  const da = new Date(date)
  const now = new Date(Date.now())
  const dif=((now.getTime()-da.getTime())/(1000 * 60 * 60 * 24))
  console.log(dif)
  const interest = (amount*((dif*200)/30)) / 10000
  console.log(dif)
  console.log(interest)

    return(
        <div className="container">
        <div className="detailCard">
        <div className="name">Name: {username}</div>
        <div className="amount">Date: {da.toLocaleDateString()}</div>
        <div className="date">Amount: {amount}</div>
        <div className="info">
        <div>Interest: {Math.round(interest)}</div>
        <div>Days: {Math.floor(dif)}</div>
        </div>

        </div>
      </div>
    )
}
export default Detail