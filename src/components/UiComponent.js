import React, { Component } from "react";
import { Link } from "react-router-dom";


export class UiComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="card uiCards">
                        <div className="card-body">
                            <Link to="/withdraw" className="link-text nav-link">
                                <h2>Withdraw Cash</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="card uiCards">
                        <div className="card-body">
                            <Link to='/deposit' className="link-text nav-link"><h2>Deposit Cash</h2></Link>
                        </div>
                    </div>

                    <div className="card uiCards">
                        <div className="card-body">
                            <Link to='/checkBalance' className="link-text nav-link"><h2>Check Balance</h2></Link>
                        </div>
                    </div>

                    <div className="card uiCards">
                        <div className="card-body">
                            <Link to='/changePin' className="link-text nav-link"><h2>Change PIN</h2></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UiComponent;
