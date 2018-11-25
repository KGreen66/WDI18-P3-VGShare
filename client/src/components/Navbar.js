import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../wdi18-p3-logo.png'

const NavbarStyles = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 5px solid gray;

    a {
        text-decoration: none;
        color: white;
        font-size: 18px;
        padding: 15px;
        &:hover{
            color: red;
        }
    }

    .right {
        display: flex;
        justify-content: space-around;
        flex-direction: row-reverse;
    }

    .app-logo {
        height: 100px;
        width: auto;
        margin: 0 50px;
    }

    .left {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 30px;
    }
    `

class Navbar extends Component {
    render(){
        return(
            <NavbarStyles>
                <div className='left'>
                    <Link to='/'><img src={logo} alt="logo" className='app-logo' /></Link>
                    <Link to='/'><h1>Gamer-Gram</h1></Link>
                </div>
                <div className='right'>
                    <Link to='/login'>Log-in</Link>
                    <Link to='/media'>Media</Link>
                    <Link to='/games'>Games</Link>
                    <Link to='/users/:userId/messages'>Messages</Link>
                </div>
            </NavbarStyles>
        )
    }
}

export default Navbar