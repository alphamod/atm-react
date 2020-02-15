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
    this.props.onWithdraw(this.state.withdrawAmount);
  }

  render() {
    return (
      <div className="row justify-content-center mt-3">
        <div className="card innner-cards mt-3 bg-info">
          <div className="card-title d-flex justify-content-between mb-0 pb-0"><h4 className="ml-2 mt-2">Enter the withdraw amount:</h4><Link to='/' className="mr-2 mt-2 btn btn-warning">Back</Link></div>
          <h3 className="text-danger text-center">{this.props.withdrawError}</h3>
          <form onSubmit={this.onSubmit} className="p-2">
            <div>
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
          <h3 className="text-light text-center">{this.props.withdrawMsg}</h3>
        </div>
      </div>
    );
  }
}

export default Withdraw;
