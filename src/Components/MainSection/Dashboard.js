import { useDispatch, useSelector } from 'react-redux';
import GetCountData from '../util';
// Using the value from state
// here we are dispatching the action to get the value
function Dashboard() {
    const dispatch = useDispatch();
    // const {data:CalData} = useSelector((state)=>state.GetCalendarEventJson);
    const countingNumber = useSelector((state) => state.GetCountDataMain);
    console.log("===> ", countingNumber);

    const countDataInit = () => {
        dispatch(GetCountData());
    }

    return (<div>
        <h3>Hello I am Dashboard</h3>
        <div>The total number of clicks {countingNumber} </div>
        <button onClick={countDataInit}> Initiate the call </button>
    </div>)
}
export default Dashboard;