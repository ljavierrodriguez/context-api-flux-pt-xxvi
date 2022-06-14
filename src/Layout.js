import { BrowserRouter, Switch, Route } from "react-router-dom";
import injectContext from "./store/appContext";
import DarkModeContext from "./store/DarkModeContext";
import './styles/main.css';
import Home from './views/Home';

const Layout = () => {
    return (
        <DarkModeContext>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </DarkModeContext>
    )
}

export default injectContext(Layout);