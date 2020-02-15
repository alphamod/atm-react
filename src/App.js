import React from 'react';
import axios from "axios";
import './App.css';
import LoginComponent from './components/LoginComponent';
import UiComponent from './components/UiComponent';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
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
      withdrawError: "",
      depositMsg: "",
      withdrawMsg: "",
      pinMsg: ""
    }
  }
  // login method
  cardLogin = (cardNumber, pinNumber) => {
    // axios api to validate card
    axios.post('http://localhost:4000/validate', { cardNumber, pinNumber })
      .then(response => {
        if (response.statusText === "OK") {
          this.setState({
            isLogged: "Logged",
            userName: response.data.accHolder,
            cardNumber: response.data.cardNumber,
            balance: response.data.accBalance,
          });
          console.log(response.data);
        }
      }, error => {
        console.log(`error inside validate then`);
        console.log(error);
      })
      .catch(err => {
        console.log(`error inside validate catch`)
        console.log(err);
      })
  }
  // logout method
  onLogout = (stateArg) => {
    this.setState({ isLogged: stateArg });
  }
  // withdraw method
  onWithdraw = (withdrawArg) => {
    axios.post('http://localhost:4000/withdraw', { withdrawAmount: withdrawArg, cardNumber: this.state.cardNumber })
      .then(response => {
        console.log(response);
        console.log(response.data);
        if (response.status == 200) {
          this.setState({
            withdrawMsg: `Withdrawed!! \nNew balance is $${response.statusText}`,
            withdrawError: ""
          })
        }
      })
      .catch(error => {
        console.log(`error inside withdraw catch`);
        console.log(error);
        if (error.response) {
          console.log(error.response.statusText);
          this.setState({
            withdrawError: error.response.statusText,
            withdrawMsg: ""
          });
        }

      });
  }

  // Deposit method
  onDeposit = (depositArg) => {
    axios.post('http://localhost:4000/deposit', { cardNumber: this.state.cardNumber, depositAmount: depositArg })
      .then(response => {
        console.log(response);
        this.setState({
          depositMsg: `Deposit Sucess!!  \nNew Balance: $${response.statusText}`
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Pin Change Method
  onPinSubmit = (oldpinArg, newPinArg) => {
    axios.post('http://localhost:4000/changePin', { cardNumber: this.state.cardNumber, oldPin: oldpinArg, newPin: newPinArg })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.setState({
            pinMsg: response.statusText
          })
        }
      })
      .catch(err => {
        console.log(err);
    })
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
        <div className="container-fluid p-0">
          <BrowserRouter>
            <NavBar onLogout={this.onLogout} userName={this.state.userName} />
            <div className="container">
              <Switch>
                <Route path="/" exact component={UiComponent} />
                <Route path="/withdraw" render={() => (<Withdraw onWithdraw={this.onWithdraw} withdrawMsg={this.state.withdrawMsg} withdrawError={this.state.withdrawError} />)} />
                <Route path="/deposit" render={() => (<Deposit onDeposit={this.onDeposit} depositMsg={this.state.depositMsg} />)} />
                <Route path="/checkBalance" render={() => (<CheckBalance cardNumber={this.state.cardNumber} />)} />
                <Route path="/changePin" render={() => (<ChangePin pinMsg={this.state.pinMsg} onPinSubmit= {this.onPinSubmit} />)} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      )
    }
  }
}

export default App;
