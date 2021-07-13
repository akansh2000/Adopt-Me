import logo from './logo.svg';
import './App.css';
import HookComp from "./NameHook";
import { useState } from "react";
import {Route, Switch  } from "react-router-dom";
import Home from "./Home";
import {BrowserRouter} from 'react-router-dom';
import Details from "./Details";
import Adopt from "./Adopt";
import Thanks from "./Thanks";

function App() {

  return(
    <div>
    <BrowserRouter basename={'/Adopt-Me'}>
     <Switch>
       <Route exact path="/Adopt-Me" component={HookComp} /> 
       <Route exact path="/Home" component={Home} />
       <Route exact path='/Home/:id' component={Details} />
        {/* <Route exact path='/Home/:id/Adopt' component={Adopt} />  */}
          <Route exact path={['/Home/1/Adopt','/Home/2/Adopt','/Home/3/Adopt','/Home/4/Adopt','/Home/5/Adopt','/Home/6/Adopt','/Home/7/Adopt','/Home/8/Adopt']} component={Adopt} />
          <Route exact path='/Thanks' component={Thanks} />
     </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
