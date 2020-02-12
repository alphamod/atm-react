import React, { Component } from 'react'
import { Route,Link, Switch } from 'react-router-dom'
import Withdraw from './withdraw'
import Deposit from './Deposit'
import CheckBalance from "./CheckBalance";
import ChangePin from "./ChangePin";

export class UiComponent extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route path='/ui' exact component={UiComponent} />
                <Route path='/withdraw' component={Withdraw} />
                <Route path='/deposit' component={Deposit} />
                <Route path='/checkBalance' component={CheckBalance} />
                <Route path='/changePin' component={ChangePin} />
            </Switch>
            <nav className=" d-flex justify-content-end ml-auto mt-4">
                <ul className="nav mt-5 UiList flex-column">
                    <li className="nav-item mt-5"><Link to='/withdraw' className="nav-link"><h2>Withdraw Cash</h2></Link></li>
                    <li className="nav-item mt-5"><Link to='/deposit' className="nav-link"><h2>Deposit Cash</h2></Link></li>
                    <li className="nav-item mt-5"><Link to='/checkBalance' className="nav-link"><h2>Check Balance</h2></Link></li>
                    <li className="nav-item mt-5"><Link to='/changePin' className="nav-link"><h2>Change PIN</h2></Link></li>
                </ul>
                
                
                </nav>
                </div>
        )
    }
}

export default UiComponent
