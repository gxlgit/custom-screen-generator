import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return( 
            <footer>
                <nav className="navbar fixed-bottom py-4" style={{backgroundColor: "#393939"}}>
                	<span data-toggle="modal" data-target="#helpModal" className="help"><i className="fa fa-question-circle"></i> Help</span>
                </nav>
            </footer>
        );
    }
}

export default Footer;