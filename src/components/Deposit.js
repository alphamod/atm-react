import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Deposit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      depositAmount: "",
      newBalance: ""
    };
  }
  
  onChange = (e)=> {
    this.setState({
      depositAmount: e.target.value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    this.props.onDeposit(this.state.depositAmount);
  }

  render() {
    return (
      <div className="row justify-content-center mt-3">
        <div className="card innner-cards mt-3 bg-info">
        <div className="card-title d-flex justify-content-between mb-0 pb-0"><h4 className="ml-2 mt-2">Enter the deposit amount::</h4><Link to='/' className="mr-2 mt-2 btn btn-warning">Back</Link></div>
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
            value="Deposit"
            className="btn btn-warning mt-1"
          />
          </form>
          <div>
            <h4 className="text-center">{this.props.depositMsg}</h4>
          </div>
        </div>
        </div>
    );
  }
}

export default Deposit;
