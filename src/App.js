import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import UiComponent from './components/UiComponent';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: "notLogged"
    }
    this.cardLogin = this.cardLogin.bind(this);
  }
  cardLogin(cardNumber, pinNumber) {
        console.log(cardNumber, pinNumber)
        // fetch api to validate card
        fetch("http://localhost:4000/validate", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({cardNumber, pinNumber})
        })
          .then(response => {
            console.log(response.json)
            if (response.statusText === "OK") {
              this.setState({
                isLogged: "Logged"
              });
              // alert("logged in");
            }
          })
          .catch(err => {
          console.log(`error: ${err}`)
        })
    }
  render() { 
    if (this.state.isLogged === "notLogged") {
      return (
        <div className="App">
          <div className="container">
            <div className="d-flex justify-content-center loginCard">
              <LoginComponent onSubmit={this.cardLogin} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.isLogged === "Logged") {
      return (
        <div className="container">
          
          <BrowserRouter>
          <UiComponent/>
          </BrowserRouter>
        </div>
      )
    }
  }
}

export default App;
