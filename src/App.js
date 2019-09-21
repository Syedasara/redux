import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/form/index"
import List from "./components/list/list"
import Index from "./components/Index"

class App extends React.Component{
    render(){
        return(
            <Router> 
              <Route path="/" exact component={Index} />
              <Route path="/Form" exact component={Form} />
              <Route path="/List" exact component={List} />
          </Router>
        )
    }
}




export default App