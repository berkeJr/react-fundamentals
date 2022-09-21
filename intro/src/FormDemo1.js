import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = {
    userName: "",
  };

  onChangeHandler = (event) => {
      this.setState({userName: event.target.value})
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input onChange={this.onChangeHandler} type="text"></input>
            <h3>User Name is: {this.state.userName}</h3>

            <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}
