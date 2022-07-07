import { useContext } from 'react';
import UserContext from '../Context';
import { classes } from 'istanbul-lib-coverage';
function RowText() {
    const { name } = useContext(UserContext);
    return (
        <div className={classes.rowTextContainer}>
            <h2>Row Text Container</h2>
            <h3>{name} is being used directly on nested component</h3>
        </div>
    );
}
export default RowText;