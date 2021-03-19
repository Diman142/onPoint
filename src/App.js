import { Route, Switch } from 'react-router-dom'
import Promo from './pages/firstPage/Promo'
import HeroPage from './pages/HeroPage/HeroPage'
import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/hero" component={HeroPage} />
        <Route path="/" component={Promo} />
      </Switch>
    </div>
  );
}

export default App;
