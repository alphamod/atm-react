import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import UiComponent from './components/UiComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Withdraw from './components/withdraw';
import ChangePin from './components/ChangePin';
import Deposit from './components/Deposit';
import CheckBalance from './components/CheckBalance';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: "notLogged",
      userName: "",
      cardNumber: "",
      balance: "",
    }
    this.cardLogin = this.cardLogin.bind(this);
  }
  cardLogin(cardNumber, pinNumber) {
    // console.log(cardNumber, pinNumber)
    // fetch api to validate card
    fetch("http://localhost:4000/validate", {
      method: "POST",
      headers: {
        "accept" : "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ cardNumber, pinNumber })
    })
      .then(response => {
        // console.log(response);
        if (response.statusText === "OK") {
          this.setState({
            isLogged: "Logged"
          });
          // alert("logged in");
        }
        return (response.json())
        
      })
      .then(data => {
        this.setState({
          userName: data.accHolder,
          cardNumber: data.cardNumber,
          balance: data.accBalance
        })
        return (console.log(data))
      })
      .catch(err => {
        console.log(err)
      })
  }

  onLogout = (stateArg) => {
    this.setState({isLogged:stateArg})
  }
  render() {
    if (this.state.isLogged === "notLogged") {
      return (
        <div className="App">
          <div className="container">
            <div className="d-flex justify-content-center loginCard">
              <LoginComponent onCardSubmit={this.cardLogin} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.isLogged === "Logged") {
      return (

        <div className="container-fluid">
          <BrowserRouter>
            <NavBar onLogout={this.onLogout} userName={this.state.userName}/>
            <div className="container">
            <Switch>
              <Route path="/" exact component={UiComponent} />
              <Route path="/withdraw" component={Withdraw} />
              <Route path="/deposit" component={Deposit} />
              <Route path="/checkBalance" component={CheckBalance} />
              <Route path="/changePin" component={ChangePin}/>
              </Switch>
              </div>
          </BrowserRouter>
        </div>
      )
    }
  }
}

export default App;
