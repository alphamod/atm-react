import React, { Component } from "react";

export class Deposit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      depositAmount: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      depositAmount: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.depositAmount);
  }

  render() {
    return (
      <div className="row justify-content-center mt-3">
      <div className="card innner-cards mt-3 bg-info">
        <form onSubmit={this.onSubmit} className="p-2">
          <div>
            <label>
              <h4>Enter the Deposit Amount:</h4>
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
            value="Deposit"
            className="btn btn-warning mt-1"
          />
        </form>
        </div>
        </div>
    );
  }
}

export default Deposit;
