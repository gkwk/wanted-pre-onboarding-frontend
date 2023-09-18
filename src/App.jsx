import {createBrowserRouter,RouterProvider,redirect} from "react-router-dom";
import Main from "./page/Main"
import NotFound from "./page/NotFound"
import SignIn from "./page/SignIn"
import SignUp from "./page/SignUp"
import SignOut from "./page/SignOut"
import ToDo from "./page/ToDo"

import AuthCheck from "./AuthCheck/AuthCheck"


function App() {
    function user_Authenticated_Loader(TargetURL) {
        if (!AuthCheck()) {
            // loader는 Navigate대신 redirect를 사용해야 한다.
            if (TargetURL  !== null) {
                return redirect("/"+TargetURL);
            }
            return redirect("/");
        }
        return null;
    }

    function user_NotAuthenticated_Loader(TargetURL) {
        if (AuthCheck()) {
            if (TargetURL !== null) {
                return redirect("/"+TargetURL);
            }
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
            loader: () => user_NotAuthenticated_Loader("todo"),
        },

        {
            path: "/signup",
            Component: SignUp,
            loader: () => user_NotAuthenticated_Loader("todo"),
        },

        {
            path: "/todo",
            Component: ToDo,
            loader: () => user_Authenticated_Loader("signin"),
        },

        {
            path: "/signout",
            Component: SignOut,
            loader: () => user_Authenticated_Loader(""),
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
