import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import socket from "./Socket.js";
const App = () => {
    useEffect(() => {

    }, []);
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default App;