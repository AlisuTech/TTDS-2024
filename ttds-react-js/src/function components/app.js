import React from 'react';
import Body from './body';
import ButtonComponent from './button';
//rfc
const App = () => {
    return (
        <div>
            <ButtonComponent content="App Content" cusClass="classtwo" />
            <p>This is Body from App</p>
            <Body></Body>
        </div>
    );
}

export default App;
