import { classes } from 'istanbul-lib-coverage';
import RowText from './RowText';
import RowImage from './RowImage';
function Dashboard() {
    return (
        <div className={classes.dashboard}>
            <h2>Hello Dashboard</h2>
            <RowText />
            <RowImage />
        </div>
    );
}
export default Dashboard;