import React from 'react';
import { useParams } from 'react-router-dom';

const RouteParam = () => {
    const {message}=useParams()
    return (
        <div>
            <p>This is a routed page</p>
            <p>{message}</p>
        </div>
    );
}

export default RouteParam;
