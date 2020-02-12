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
      <div className="card mt-3 bg-info">
        <form>
          <div>
            <label>
              <h4>Your Account Balance:</h4>
            </label>
            <input
              type="number"
              disabled
              className="form-control"
              value={this.state.balance}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CheckBalance;
