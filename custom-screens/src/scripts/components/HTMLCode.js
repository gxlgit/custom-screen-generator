import React, {Component} from "react";
import * as CSSStyles from "./CSSStyles.js";

export class Option1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-1" style={{fontFamily: this.props.state.font}}>
                    <div className="cs-header" style={{
                        background: this.props.state.headerBackGroundColor,borderBottomColor: this.props.state.headerBorderColor
                        }}>
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-30">
                            <div className="cs-bar" style={{background: this.props.state.barColor}}>
                            </div>
                        </div>
                        <div className="col-70">
                            <p className="cs-sub-heading" style={{
                                fontWeight: this.props.state.isSubHeadingBold
                                }}>{this.props.state.subHeadingText}</p>
                            <p className="mainMessage" style={{fontWeight: this.props.state.isMainMessageBold}}>{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref} target="_blank">{this.props.state.actionButtonText}</a>
                            <a className="action-button close-button" data-dismiss="modal" data-close="true">No Thanks</a>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option2 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-2" style={{fontFamily: this.props.state.font}}>
                    <div className="cs-header" style={{
                        background: this.props.state.headerBackGroundColor
                        }}>
                        <div className="lines" style={{borderColor: this.props.state.linesColor}}></div>
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-98">
                            <p className="cs-sub-heading" style={{fontWeight: this.props.state.isSubHeadingBold}}>{this.props.state.subHeadingText}</p>
                            <p className="mainMessage">{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref}  target="_blank">{this.props.state.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option3 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-3" style={{fontFamily: this.props.state.font}}>
                    <div className="cs-header" style={{
                        background: this.props.state.headerBackGroundColor
                        }}>
                        <div className="lines" style={{borderColor: this.props.state.linesColor}}></div>
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-98">
                            <p className="cs-sub-heading" style={{
                                fontWeight: this.props.state.isSubHeadingBold
                                }}>{this.props.state.subHeadingText}</p>
                            <p className="mainMessage">{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref}  target="_blank">{this.props.state.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}


export class Option4 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-4" style={{fontFamily: this.props.state.font}}>
                    <div className="cs-header" style={{
                        background: this.props.state.headerBackGroundColor,
                        borderBottomColor: this.props.state.headerBorderColor
                        }}>
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                    </div>
                    <div className="col-wrap">
                        <div className="col-25">
                            <div className="cs-bar" style={{background: this.props.state.barColor}}>
                            </div>
                        </div>
                        <div className="col-75">
                            <p className="cs-sub-heading" style={{
                                fontWeight: this.props.state.isSubHeadingBold
                                }}>{this.props.state.subHeadingText}</p>
                            <p className="mainMessage">{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref}  target="_blank">{this.props.state.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option5 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-5" style={{fontFamily: this.props.state.font}}>
                    
            </div>
        );
    }
}

export class Option6 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-6" style={{fontFamily: this.props.state.font}}>
                    <div className="col-wrap">
                        <div className="col-50" style={{backgroundColor: this.props.state.leftColumnBackGroundColor}}>
                            <div className="cs-header">
                                <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}
                                </p>
                            </div>
                        </div>
                        <div className="col-50" style={{backgroundColor: this.props.state.rightColumnBackGroundColor}}>
                            <p className="mainMessage" style={{color: this.props.state.mainMessageTextColor}}>{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref}  target="_blank">{this.props.state.actionButtonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export class Option7 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-7" style={{fontFamily: this.props.state.font}}>
                <div className="col-wrap">
                    <div className="cs-header" style={{backgroundColor: this.props.state.leftColumnBackGroundColor, borderColor: this.props.state.headerBorderColor}}>
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                    </div>
                    <div className="col-100" style={{backgroundColor: this.props.state.rightColumnBackGroundColor}}>
                        <div class="col-50">
                            <p className="cs-sub-heading" style={{fontWeight: this.props.state.isSubHeadingBold}}>{this.props.state.subHeadingText1}</p>
                            <p className="mainMessage" style={{color: this.props.state.mainMessageTextColor1}}>{this.props.state.mainMessageText1}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor1}} href={this.props.state.buttonHref1}  target="_blank">{this.props.state.actionButtonText1}</a>
                        </div>
                        <div class="col-50">
                            <p className="cs-sub-heading" style={{fontWeight: this.props.state.isSubHeadingBold}}>{this.props.state.subHeadingText2}</p>
                            <p className="mainMessage" style={{color: this.props.state.mainMessageTextColor2}}>{this.props.state.mainMessageText2}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor2}} href={this.props.state.buttonHref2}  target="_blank">{this.props.state.actionButtonText2}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export class Option8 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="option-8" style={{background: this.props.state.bodyBackGroundColor, fontFamily: this.props.state.font}}>
                    <div className="cs-header">
                        <p className="cs-header-text" style={{color: this.props.state.headerTextColor}}>{this.props.state.headerText}</p>
                        <hr />
                    </div>

                    <div className="col-wrap">
                        <div className="col-100">
                            <p className="cs-sub-heading" style={{color: this.props.state.mainMessageTextColor,
                                fontWeight: this.props.state.isSubHeadingBold
                                }}>{this.props.state.subHeadingText}</p>
                            <p className="mainMessage" style={{color: this.props.state.mainMessageTextColor}}>{this.props.state.mainMessageText}</p>
                            <a className="action-button" style={{backgroundColor: this.props.state.actionButtonColor}} href={this.props.state.buttonHref}  target="_blank">{this.props.state.actionButtonText}</a>
                            <a className="action-button close-button" data-dismiss="modal" data-close="true">No Thanks</a>
                    </div>
                </div>
            </div>
        );
    }
}
