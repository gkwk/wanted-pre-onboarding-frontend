// import { BrowserRouter, Routes, Route, useNavigate, Navigate, redirect } from 'react-router-dom';
import {createBrowserRouter,RouterProvider,Navigate, redirect} from "react-router-dom";
import Main from "./page/Main"
import NotFound from "./page/NotFound"
import SignIn from "./page/SignIn"
import SignUp from "./page/SignUp"
import ToDo from "./page/ToDo"

import AuthCheck from "./page/AuthCheck"


function App() {
    function user_Authenticated_Loader() {
        if (!AuthCheck()) {
            // loader는 Navigate대신 redirect를 사용해야 한다.
            return redirect("/");
        }
        return null;
    }

    function user_NotAuthenticated_Loader() {
        if (AuthCheck()) {
            return redirect("/");
        }
        return null;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            Component: Main,
        },
        
        {
            path: "/signin",
            Component: SignIn,
            loader: user_NotAuthenticated_Loader,
        },

        {
            path: "/signup",
            Component: SignUp,
            loader: user_NotAuthenticated_Loader,
        },

        {
            path: "/todo",
            Component: ToDo,
            loader: user_Authenticated_Loader,
        },

        {
            path: "/signout",
            loader: user_Authenticated_Loader,
            Component() {localStorage.removeItem("access_token"); Navigate("/");}            
        },

        {
            path: "*",
            Component: NotFound,
        },
    ]);




    return (
        <div className="App h-100">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
