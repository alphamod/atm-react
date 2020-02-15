import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios  from "axios";

export class CheckBalance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accBalance: ""
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/checkBal/${this.props.cardNumber}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          accBalance: response.data.accBalance
        });
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="row justify-content-center mt-3">
        <div className="card innner-cards mt-3 bg-info">
        <div className="card-title d-flex justify-content-between mb-0 pb-0"><h4 className="ml-2 mt-2">Your balance:</h4><Link to='/' className="mr-2 mt-2 btn btn-warning">Back</Link></div>
        <div className="p-2">
          <div>
              <div><h1 className="text-white font-weight-bolder text-center">$ {this.state.accBalance}</h1></div>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default CheckBalance;
