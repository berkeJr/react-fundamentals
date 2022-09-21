import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = {
    userName: "",
    city: "",
  };

  onChangeHandler = (event) => {
    // this.setState({userName: event.target.value});  // eski tek input'lu durumda

    // name => event'imize sebep olan nesnenin ismi
    let name = event.target.name;

    // value => event'e sebep olan hedef nesnenin value'su
    let value = event.target.value;

    this.setState({ [name]: value });  // name = event'e sebep olan nesne: input onChange
    // Burada name'e karşılık gelen değerleri input'ta name attribute'u ile yazarız.
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input name="userName" onChange={this.onChangeHandler} type="text"></input>
          <h3>User Name is: {this.state.userName}</h3>

          <h3>City</h3>
          <input name="city" onChange={this.onChangeHandler} type="text" />
          <h3>City is: {this.state.city} </h3>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}
