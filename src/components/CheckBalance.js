import React, { Component } from "react";

export class CheckBalance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    };
  }

  render() {
    return (
      <div className="row justify-content-center mt-3">
      <div className="card innner-cards mt-3 bg-info">
        <div className="p-2">
          <div>
            <div>
              <h4>Your Account Balance:</h4>
            </div>
              <div><h1 className="text-white font-weight-bolder text-center">$ {this.props.accBalance}</h1></div>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default CheckBalance;
