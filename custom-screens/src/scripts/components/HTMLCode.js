import React, {Component} from "react";
import * as CSSStyles from "./CSSStyles.js";


export class Option1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-1" id="option1">
                    <div className="header" style={{
                        background: this.props.headerBackGroundColor,
                        borderBottomColor: this.props.headerBorderColor
                        }}>
                        <p className="header-text">{this.props.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-25">
                            <div className="bar" style={{background: this.props.barColor}}>
                            </div>
                        </div>
                        <div className="col-75">
                            <p className="sub-heading" style={{
                                fontWeight: this.props.isSubHeadingBold
                                }}>{this.props.subHeadingText}</p>
                            <p className="mainMessage">{this.props.mainMessageText}</p>
                            <a className="action-button" href="#" target="_blank">{this.props.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}