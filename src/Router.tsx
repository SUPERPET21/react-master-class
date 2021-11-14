
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDark: () => void;
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route exact path="/">
          <Coins/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;