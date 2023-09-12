import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./page/Main"
import NotFound from "./page/NotFound"
import SignIn from "./page/SignIn"
import SignUp from "./page/SignUp"
import ToDo from "./page/ToDo"

function App() {
    return (
        <div className="App h-100">
            <BrowserRouter>
                    <Routes>
                        <Route exact path="/signup/"  element={<SignUp />}></Route>
                        <Route exact path="/signin/"  element={<SignIn />}></Route>
                        <Route exact path="/todo/"  element={<ToDo />}></Route>
                        <Route exact path="/"  element={<Main />}></Route>
                        <Route path="*"  element={<NotFound />}></Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
