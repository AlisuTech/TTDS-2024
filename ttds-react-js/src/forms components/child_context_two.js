import React,{useContext} from 'react';
import { UserContext } from './context_comp';

const ChildContextTwo = () => {
    const user=useContext(UserContext)
    return (
        <div>
            <p style={{backgroundColor:'blue'}}>{user}</p>
        </div>
    );
}

export default ChildContextTwo;
