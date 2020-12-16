import React from 'react'
import './style.css'
import Logo from '../Images/logo.png'

class Header extends React.Component{
    render(){
        return(
            <div id="containerHeader">  
                <a href="/">
                    <img src={Logo} alt="Logo"/>
                </a> 
            </div>
        )
    }
}

export default Header