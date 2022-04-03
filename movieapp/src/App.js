import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import { BrowserRouter as Router, Route, Switch,BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
  <Router>
    <Navbar/>
    <Switch>
    <Route path='/' exact render={(props)=>(
      <>
      <Banner {...props}/>
      <Movies {...props}/>
      
      </>
    )}/>
    <Route path='/favourites' component={Favourites}/>
    </Switch>
    
  {/* <Banner/>
  <Movies/> */}
  {/* <Favourites/> */}
  </Router>
  );
}

export default App;
