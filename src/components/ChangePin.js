import React, { Component } from "react";
import { Link } from "react-router-dom";


export class ChangePin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldpin: "",
      newpin: "",
      confPin: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
      e.preventDefault();
      if (this.state.newpin == this.state.confPin) { 
          this.props.onPinSubmit(this.state.oldpin, this.state.confPin);
        }
  }

  render() {
    return (
      <div className="row justify-content-center mt-3">
        <div className="card innner-cards mt-3 bg-info">
          <div className="card-title d-flex justify-content-between mb-0 pb-0"><h4 className="ml-2 mt-2">Change pin:</h4><Link to='/' className="mr-2 mt-2 btn btn-warning">Back</Link></div>
          <div><h3 className="bg-light text-center text-success">{this.props.pinMsg}</h3></div>
        <form onSubmit={this.onSubmit} className="p-2">
          <div>
            <input
              type="password"
              placeholder="Enter the old pin"
              className="form-control my-1"
              onChange={e => {
                this.setState({ oldpin: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Enter the new pin"
              className="form-control my-1"
              onChange={e => {
                this.setState({ newpin: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="confirm new pin"
              className="form-control my-1"
              onChange={e => {
                this.setState({ confPin: e.target.value });
              }}
            />
          </div>
          <input
            type="submit"
            value="Change Pin"
            className="btn btn-warning mt-1"
          />
        </form>
        </div>
        </div>
    );
  }
}

export default ChangePin;
