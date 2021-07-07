import React, { Component } from 'react';

class Header extends Component {

    render(){
	return(

    <div className="header-bar">
        <a className="header-logo" href='/'>
            <img src='/images/carnalesLogo.png' alt=''></img>
        </a>
        <div className="header-tools">

            <div className="icon icon-container" href="#" data-toggle="dropdown" role="button" aria-expanded="false">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path d="M4 0c-1.1 0-2 .9-2 2 0 1.04-.52 1.98-1.34 2.66-.41.34-.66.82-.66 1.34h8c0-.52-.24-1-.66-1.34-.82-.68-1.34-1.62-1.34-2.66 0-1.1-.89-2-2-2zm-1 7c0 .55.45 1 1 1s1-.45 1-1h-2z" />
                </svg>
                <div className="notification"><span>3</span></div>
            </div>
            <div className="icon icon-container" href="#" data-toggle="dropdown" role="button" aria-expanded="false">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path d="M0 0v1h8v-1h-8zm0 2.97v1h8v-1h-8zm0 3v1h8v-1h-8z" transform="translate(0 1)" />
                </svg>
            </div>


        </div>	
    </div>

    )}
}


export default Header;