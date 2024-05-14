import React,{useContext} from 'react';
import { UserContext } from './context_comp';

const ChildContextOne = () => {
    const user=useContext(UserContext)
    return (
        <div>
            <p style={{backgroundColor:'red'}}>{user}</p>
        </div>
    );
}

export default ChildContextOne;
