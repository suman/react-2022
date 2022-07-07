import { useContext } from 'react';
import { classes } from 'istanbul-lib-coverage';
import UserContext from '../Context';
function RowImage() {
    // email is being used directly on nested component
    // we don't need to pass through from parent-to-child after using context api
    const { email } = useContext(UserContext);
    return (
        <div className={classes.rowImageContainer}>
            <h2>Row Image Container</h2>
            <h3>{email} is being used directly on nested component</h3>
        </div>
    );
}
export default RowImage;