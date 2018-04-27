import React, { Component } from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import CSOptions from "./CSOptions.js";
import * as Options from "./Options.js";
import Option1_Image from "../../images/option1.png";
import Option2_Image from "../../images/option2.png";
import Option3_Image from "../../images/option3.png";
import Option4_Image from "../../images/option4.png";
import Option5_Image from "../../images/option5.png";
import Option6_Image from "../../images/option6.png";
import Option7_Image from "../../images/option7.png";
import Option8_Image from "../../images/option8.png";
import OptionForm_Image from "../../images/option-form.png";


class Main extends Component{
    render(){
        return(
            <Switch>
            <div className="row">
                <main className="col-md-12">
                    <div className="dropdown show">
                        <a className="btn btn-dropdown-toggle screen-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Template <span className="fa fa-file float-right mt-3"></span>
                        </a>
                        <div className="dropdown-menu container" aria-labelledby="dropdownMenuLink">
                        <div className="row">
                            <Link className="dropdown-item" to="/custom-screen-generator/option1"><img className="option-image" src={Option1_Image}/></Link>
                            <Link className="dropdown-item" to="/custom-screen-generator/option2"><img className="option-image" src={Option2_Image}/></Link> 
                            <Link className="dropdown-item"  to="/custom-screen-generator/option3" disabled><img className="option-image" src={Option3_Image}/></Link>     
                        </div>
                        <div className="row">
                            <Link className="dropdown-item"  to="/custom-screen-generator/option4"><img className="option-image" src={Option4_Image}/></Link>
                            <Link className="dropdown-item"  to="/custom-screen-generator/option5"><img className="option-image" src={Option5_Image}/></Link>
                            <Link className="dropdown-item"  to="/custom-screen-generator/option6"><img className="option-image" src={Option6_Image}/></Link>
                        </div>

                        <div className="row">
                            <Link className="dropdown-item"  to="/custom-screen-generator/option7"><img className="option-image" src={Option7_Image}/></Link>
                            <Link className="dropdown-item"  to="/custom-screen-generator/option8"><img className="option-image" src={Option8_Image}/></Link>
                            <Link className="dropdown-item"  to="/custom-screen-generator/option-form"><img className="option-image" src={OptionForm_Image}/></Link>
                        </div>
                        </div>
                    </div>
                    <Route exact path="/custom-screen-generator/" component={Options.Option1} />
                    <Route path="/custom-screen-generator/option1" component={Options.Option1} />
                    <Route path="/custom-screen-generator/option2" component={Options.Option2} />
                    <Route path="/custom-screen-generator/option3" component={Options.Option3} />
                    <Route path="/custom-screen-generator/option4" component={Options.Option4} />
                    <Route path="/custom-screen-generator/option5" component={Options.Option5} />
                    <Route path="/custom-screen-generator/option6" component={Options.Option6} />
                    <Route path="/custom-screen-generator/option7" component={Options.Option7} />
                    <Route path="/custom-screen-generator/option8" component={Options.Option8} />
                    <Route path="/custom-screen-generator/option-form" component={Options.OptionForm} />
                </main>
            </div>
            </Switch>
        );
    }
}

export default Main;