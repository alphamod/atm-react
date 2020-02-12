import React, { Component } from "react";

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
          this.props.onSubmit(this.state.oldpin, this.state.confPin);
        }
  }

  render() {
    return (
      <div className="card mt-3 bg-info">
        <form onSubmit={this.onSubmit}>
          <div>
            <label>
              <h4>Change Pin:</h4>
            </label>
            <input
              type="password"
              placeholder="Enter the old pin"
              className="form-control"
              onChange={e => {
                this.setState({ oldpin: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Enter the new pin"
              className="form-control"
              onChange={e => {
                this.setState({ newpin: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="confirm new pin"
              className="form-control"
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
    );
  }
}

export default ChangePin;
