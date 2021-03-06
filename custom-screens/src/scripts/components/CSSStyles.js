import React, {Component} from "react";

export class Option1 extends Component{
    render(){
        const css = `
        .modal-dialog {
            height: 600px !important; }
            #site-container .custom-content .modal .modal-dialog .modal-content .modal-body {
              padding: 0px 0px 0px 0px !important;
              height: 100%; }
            #site-container .main p, #site-container .main .description{
              color:#333333;
            }
        .option-1 hr{
          position:relative;
          z-index:1;
        }
        .option-1 {
            width: 100%;
            height: 100%; }
            .option-1 .cs-header {
              padding: 40px 40px 0px 40px !important;
              height: 105px;
              margin-left: 50px;
              background-color:#ffffff;}
              .option-1 .cs-header .cs-header-text {
                color: #ffffff;
                font-size: 40px !important;
                line-height: 40px !important;
                font-weight:bold !important;
                font-family: inherit !important }
            .option-1 .cs-sub-heading{
                font-size:24px !important;
                line-height: 27px !important;
                font-family: inherit !important
            }
            .option-1 p{
              margin-bottom:25px !important; 
              padding:0 !important;
            }
            .option-1 .mainMessage{
              font-family: inherit !important
              font-size: 16px;
              line-height: 23px;
            }
            .option-1 .col-wrap {
              height: calc(100% - 105px);
              padding: 40px 40px;
              margin-left: 50px;
              background-color:#ffffff; }
            .option-1 .cs-bar {
              width: 50px;
              height: 100%;
              background-color: #f8f9fa;
              float:left;}
              .option-1 .lines {
                border-left: 5px solid;
                border-top: 5px solid;
                border-color: #000000;
                float: left;
                height: 129px;
                width: 107px;
                position: absolute;
                top: 35px;
                left: 50px; }
            .option-1 .col-30 {
              width: 30%;
              height: 100%;
              float: left; }
            .option-1 .col-70 {
              overflow-y: auto;
              height: 100%; }
            .option-1 .action-button {
              background-color: #25408f;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin-top: 20px;
              display: inline-block;
              transition: .15s all; }
            .option-1 .action-button:hover{
                cursor:pointer;}
            .option-1 .close-button{
              background-color: #afafaf;
              color:#ffffff !important;
               margin-right:15px !important;}
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}


export class Option3 extends Component{
    render(){
        const css = `
        .modal-dialog {
            height: 600px !important; }
            .modal-dialog .modal-content .modal-body {
              padding: 0px 0px 0px 0px !important; }
          #site-container .custom-content .modal .modal-dialog .modal-content .modal-body{
            height:100%;
          }
          #site-container .modal .modal-body p {
            padding: 0px;
          }
          .option-3 {
            width: 100%;
            height: 100%; 
            padding-top:60px;}
            .option-3 .cs-header {
              height: 75px;
              background-color: #286090; }
              .option-3 .cs-header .cs-header-text {
                color: #000;
                font-size: 28px !important;
                line-height: 28px;
                padding: 28px 0px 0px 88px !important;
                font-family: inherit !important }
            .option-3 .col-wrap {
              width: 100%;
              height: calc(100% - 75px);
              overflow-y: auto;
              padding: 0px 30px; }
            .option-3 .cs-sub-heading {
                font-size:24px !important;
                line-height: 27px !important;
                font-family: inherit !important;
                margin-bottom: 16px !important; }
            .option-3 .mainMessage{
              font-family: inherit !important
            }
            .option-3 .lines {
              border-left: 5px solid;
              border-top: 5px solid;
              border-color: #10aea6;
              float: left;
              height: 129px;
              width: 107px;
              position: absolute;
              top: 30px;
              left: 50px; }
            .option-3 .col-98 {
              width: 98%;
              float: right;
              padding: 40px 40px; }
            .option-3 .action-button {
              background-color: #10aea6;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin-top: 20px;
              margin-left: 0px;
              display: inline-block; }
              .option-3 .close-button{
              background-color: #afafaf;
              color:#ffffff !important;
               margin-right:15px !important;}
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}

export class Option4 extends Component{
    render(){
        const css = `
        .modal-dialog {
            height: 600px !important; }
            .modal-dialog .modal-content .modal-body {
              padding: 0px !important; }
        #site-container .custom-content .modal .modal-dialog .modal-content .modal-body {
              height: 100%; }
        .option-4 {
            width: 100%;
            height: 100%; }
            .option-4 .cs-header {
              height: 75px;
              background-color: #286090;
              border-bottom: 6px solid rgb(15, 174, 166); }
              .option-4 .cs-header .cs-header-text {
                color: #000;
                font-size: 30px !important;
                line-height: 30px !important;
                padding: 25px 0px 0px 25px !important;
                font-family: inherit !important }
            .option-4 .cs-sub-heading{
                font-size:24px !important;
                line-height: 27px !important;
                font-family: inherit !important
            }
            .option-4 .mainMessage{
              font-family: inherit !important
            }
            .option-4 .col-wrap {
              width: 100%;
              height: 100%;
              padding: 0px 0px; }
            .option-4 .cs-bar {
              width: 100%;
              height: 100%;
              background-color: #366e9f;
              float: right; }
            .option-4 .col-25 {
              width: 25%;
              height: calc(100% - 75px);
              float: left; }
            .option-4 .col-75 {
              width: 75%;
              float: right;
              padding: 40px 40px; 
              overflow-y: auto;
              height: calc(100% - 75px);}
            .option-4 .action-button {
              background-color: #51aaa3;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin-top: 20px;
              margin-left: 15px;
              display: inline-block; }
              .option-4 .close-button{
              background-color: #afafaf;
              color:#ffffff !important;
               margin-right:15px !important;}
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}

export class Option5 extends Component{
    render(){
        const css = `

        .modal-dialog {
            height: 600px !important; }
            .modal-dialog .modal-content .modal-body {
            padding: 0px 0px 0px 0px !important; 
            height:100% !important;    
        }
  
        .option-5 {
            width: 100%;
            height: 100%; }
            .option-5 .cs-header .cs-header-text {
              color: #000;
              font-size: 28px !important;
              padding: 225px 0px 0px 88px !important;}
            .option-5 .main-message {
              padding-top: 75px !important;
                color: #fff !important;
            }
            .option-5 .col-wrap {
              width: 100%;
              height: 100%;
              padding: 0px 0px; }
            .option-5 .col-50 {
              width: 50%;
              float: left;
              height: 100%;
              padding: 40px 40px; }
            .option-5 .action-button {
              background-color: #25408f;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin-top: 20px;
              margin-left: 15px;
              position: absolute;
              bottom: 30px;
              right: 50px;
              display: inline-block; }
              .option-5 .close-button{
              background-color: #afafaf;
              color:#ffffff !important;
               margin-left:15px !important;}
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}

export class Option6 extends Component{
    render(){
        const css = `

        .modal-dialog {
            height: 600px !important; }
            .modal-dialog .modal-content .modal-body {
            padding: 0px 0px 0px 0px !important; 
            height:100% !important;    
        }
  
        .option-6 {
            width: 100%;
            height: 100%; }
            .option-6 .cs-header .cs-header-text {
              color: #000;
              font-size: 28px !important;
              padding: 225px 0px 0px 88px !important;}
            .option-6 .main-message {
              padding-top: 75px !important;
                color: #fff !important;
            }
            .option-6 .col-wrap {
              width: 100%;
              height: 100%;
              padding: 0px 0px; }
            .option-6 .col-50 {
              width: 50%;
              float: left;
              height: 100%;
              padding: 40px 40px; }
            .option-6 .action-button {
              background-color: #25408f;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin-top: 20px;
              margin-left: 15px;
              position: absolute;
              bottom: 30px;
              right: 50px;
              display: inline-block; }
              .option-6 .close-button{
              background-color: #afafaf;
              color:#ffffff !important;
               margin-right:15px !important;}
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}

export class Option7 extends Component{
    render(){
        const css = `
        .modal-dialog {
            height: 600px !important; }
            .modal-dialog .modal-content .modal-body {
            padding: 0px 0px 0px 0px !important; 
            height:100% !important;    
        }
        #site-container .modal .modal-body .option-7 p {
            padding: 0px;
        }
        .option-7 {
            width: 100%;
            height: 100%; }
            .option-7 .cs-header {
              height: 75px;
              background-color: #f8f9fa;
              border-bottom: 6px solid rgb(15, 174, 166); }
            .option-7 .cs-header .cs-header-text {
              color: #ffffff;
              font-size: 30px !important;
              line-height: 30px !important;
              padding: 25px 0px 0px 40px !important;
              font-family: inherit !important }
            .option-7 .col-50 {
              width: 50%;
              float: left;
              padding-right:40px; }
            .option-7 .cs-sub-heading {
              font-size: 24px !important;
              line-height: 27px !important;
              font-family: inherit !important;
              margin-bottom: 15px !important;
            }
            #site-container .modal .modal-body p {
              padding: 16px 0px;
            }
            .option-7 .main-message {
              padding-top: 75px !important;
                color: #fff !important;}
            .option-7 .col-wrap {
              width: 100%;
              height: 100%;
              padding: 0px 0px; }
            .option-7 .col-100 {
                padding:40px;
                height: calc(100% - 75px);
                overflow-y:auto; }
            .option-7 .action-button {
              background-color: #0faea6;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin-top: 20px;
              display: inline-block; }
              .option-7 .close-button{
              background-color: #afafaf;
              color:#ffffff !important;
               margin-left:15px !important;}
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}

export class Option8 extends Component{
    render(){
        const css = `
        #site-container .custom-content .modal .modal-dialog .modal-content .modal-body {
              padding: 0px 0px 0px 0px !important;
              height: 100%; }
        .modal-dialog {
            height: 600px !important; }
            .modal-dialog .modal-content .modal-body {
              padding: 0px !important; }
        .option-8 {
            width: 100%;
            height: 100%; }
            .option-8 .cs-header {
              padding: 35px 40px 0px 40px !important;
              color: #484848;
              font-family: inherit !important}
            .option-8 .cs-header .cs-header-text {
                color: #484848;
                font-size: 35px !important;
                line-height: 41px !important;
                font-weight:600 !important;
                font-family: inherit !important}
            .option-8 .cs-sub-heading{
                font-size:24px !important;
                line-height: 30px;
                font-family: inherit !important}
            .option-8 hr{
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
            .option-8 .col-wrap {
              width: 100%;
              height: calc(100% - 112px);
              padding: 0px 0px;
              overflow-y:auto; }
            .option-8 .col-100 {
              width: 100%;
              padding: 20px 40px; }
            .option-8 p{
                padding:0px !important;
                margin-bottom: 25px !important;
                font-family: inherit !important
              }
            .option-8 .action-button {
              background-color: #10aea6;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin: 20px 0px;
              display: inline-block;
              font-family: inherit !important }
            .option-8 .action-button:hover{
                cursor:pointer;}
            .option-8 .close-button{
              background-color: #afafaf;
              color:#ffffff !important;
               margin-right:15px !important;}
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}

export class OptionForm extends Component{
    render(){
        const css = `
          #site-container .custom-content .modal .modal-dialog .modal-content .modal-body {
              height: 100% !important;
              padding: 0px !important;
          }
          #custom-screen-iframe{
            width:100%;
            height:100%;
          }
          .option-form{
            height:100%;
          }
          @media (max-width:1030px){
              #site-container .custom-content .modal .modal-dialog {
              width: 100%;
          }
          }

          @media screen and (max-width: 773px){
              #site-container .main>:not(.menu) .custom-content .modal .modal-dialog {
                  -webkit-transform: scale(0.9, 0.9) translate(-1%, -17%);
                  transform: scale(0.9, 0.9) translate(-1%, -17%);
              }
          }
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}