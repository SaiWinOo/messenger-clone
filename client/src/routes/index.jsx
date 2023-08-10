import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Chat from "../pages/Chat.jsx";
import Login from "../pages/Login.jsx";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Chat/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
]);

export default routes;