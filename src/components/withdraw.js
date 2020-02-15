import React, { Component } from "react";

export class Withdraw extends Component {
  constructor(props) {
    super(props);

    this.state = {
      withdrawAmount: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      withdrawAmount: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onWithdraw(this.state.withdrawAmount);
  }

  render() {
    return (
      <div className="row justify-content-center mt-3">
      <div className="card innner-cards mt-3 bg-info">
        <h3 className="text-danger text-center">{this.props.withdrawError}</h3>
        <form onSubmit={this.onSubmit} className="p-2">
          <div>
            <label>
              <h4>Enter Withdraw Amount:</h4>
            </label>
            <input
              type="number"
              placeholder="Enter the amount here"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <input
            type="submit"
            value="Withdraw"
            className="btn btn-warning mt-1"
          />
        </form>
        </div>
        </div>
    );
  }
}

export default Withdraw;
