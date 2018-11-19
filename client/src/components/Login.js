import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'

const LoginStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .signin {
        padding: 5px;
        margin-top: 25px;
        border: 5px solid black;
        height: 200px;
        text-align: center;
    }
    .signin label {
        padding: 5px;
        margin: 5px;
    }
    .signin h3 {
        padding-bottom: 15px;
        border-bottom: 3px solid gray;
    }
    .signup {
        padding: 5px;
        margin-top: 25px;
        border: 5px solid black;
        height: 200px;
        text-align: center;
    }
    .signup label {
        padding: 5px;
        margin: 5px;
    }
    .signup h3 {
        padding-bottom: 15px;
        border-bottom: 3px solid gray;
    }
    .or {
        font-size: 20px;
        font-weight: bolder;
    }
    `

class Login extends Component {
    state={
        users: [],
        newUser: {        }
    }

    getAllUsers = () => {
        axios.get("/api/users").then((res) => {
          this.setState({ users: res.data })
        })
      }
    
    componentDidMount() {
        this.getAllUsers()
      }

      handleChange = (event) => {
        var updatedNewUser = {...this.state.newUser}
        updatedNewUser[event.target.name] = event.target.value
        this.setState({newUser: updatedNewUser})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/users', this.state.newUser).then(res => {
            this.props.history.push(`/users/${res.data._id}`)    
        })
    
    }    

    handleLogin = (event) => {
// function to handle the signin form. If gamertag and password match existing in db, then allow login as that user.
    }

    render(){
        return(
            <div>
            <LoginStyles>
                <div className='signin'>
                    <h3>Already signed up?</h3>
                    <label htmlFor="gamertag">Gamertag: </label>
                    <input type="text" name='gamertag' value={this.state.users.gamertag} onChange={this.loginChange} />
                    <label htmlFor="password">Password: </label>
                    <input type="text" name='password' value={this.state.users.password} onChange={this.loginChange} />
                    <button onClick={this.handleLogin}>Log-in</button>
                </div>
                <div className='or'>
                    <h3>OR</h3>
                </div>
                <div className='signup'>
                    <h3>Create a new account</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="gamertag">Gamertag: </label>
                        <input type="text" name='gamertag' value={this.state.newUser.gamertag} onChange={this.handleChange} />
                        <label htmlFor="name">Name: </label>
                        <input type="text" name='name' value={this.state.newUser.name} onChange={this.handleChange} />
                        <label htmlFor="password">Password: </label>
                        <input type="text" name='password' value={this.state.newUser.password} onChange={this.handleChange} />
                        <button type='submit'>Create Account</button>
                    </form>
                </div>
            </LoginStyles>
            <div>
                <h3>Please Select an Existing User</h3>
                {this.state.users.map(user => (
                    <div key={user._id}>
                        <Link to={`/users/${user._id}`}>{user.gamertag}</Link>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default Login