import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import Index from './components/index';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function home() {
    return <p> home page</p>
}
function second() {
    return <p>second page</p>
}

ReactDOM.render(

<Router> 
    <div>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route  path="/app" component={App}/>
            <Route path="/home" component={home}/>
            <Route path="/second" component={second}/>
            <Route path="/login" component={Login}/>
            <Route path="/index" component={Index}/>
        </Switch>
    
    </div>
</Router>,
document.getElementById('root'));
registerServiceWorker();
