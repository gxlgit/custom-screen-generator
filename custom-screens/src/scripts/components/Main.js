import React, { Component } from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import CSOptions from "./CSOptions.js";
import {Option1, Option2, Option3, Option4, Option5, Option6, Option7} from "./Options.js";

class Main extends Component{
    render(){
        return(
            <Switch>
            <div className="row">
                <aside className="col-md-2 bg-dark" style={{height:"90vh"}} >           
                    <ul>
                        <li><Link to="/everfi-custom-screens/option1">Option 1</Link></li>
                        <li><Link to="/everfi-custom-screens/option2">Option 2</Link></li>
                        <li><Link to="/everfi-custom-screens/option3">Option 3</Link></li>
                        <li><Link to="/everfi-custom-screens/option4">Option 4</Link></li>
                        <li><Link to="/everfi-custom-screens/option5">Option 5</Link></li>
                        <li><Link to="/everfi-custom-screens/option6">Option 6</Link></li>
                        <li><Link to="/everfi-custom-screens/option7">Option 7</Link></li>
                    </ul>  
                </aside> 
                <main className="col-md-10">
                    <Route path="/everfi-custom-screens/option1" component={Option1} />
                    <Route path="/everfi-custom-screens/option2" component={Option2} />
                    <Route path="/everfi-custom-screens/option3" component={Option3} />
                    <Route path="/everfi-custom-screens/option4" component={Option4} />
                    <Route path="/everfi-custom-screens/option5" component={Option5} />
                    <Route path="/everfi-custom-screens/option6" component={Option6} />
                    <Route path="/everfi-custom-screens/option7" component={Option7} />
                </main>
            </div>
            </Switch>
        );
    }
}

export default Main;