import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    this.props.onSubmit(this.state.withdrawAmount);
  }

  render() {
    return (
      <div className="card mt-3 bg-info">
        <form onSubmit={this.onSubmit}>
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
        <div className="card-footer">
          <Link className="btn btn-warning" to="/" >Home</Link>
        </div>
      </div>
    );
  }
}

export default Withdraw;
