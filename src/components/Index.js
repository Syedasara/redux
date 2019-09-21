import React from 'react';
import Header from "./header/header"
import { Link } from "react-router-dom";

class Index extends React.Component{
    render(){
        return(
            <div>
               <Header />
              <li>
              <Link to="/form">Form</Link>
              </li> 
            </div>
            
        )
    }
}

export default Index;