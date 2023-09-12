import React, { Component } from "react";

class addItem extends Component {
  state = {
    product: "",
    price: "",
    quantity: 1,
  };

  handleChange = (e) => {
    console.log(e.target.id + ": " + e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.props);
    e.preventDefault();
    if (this.state.quantity < 1) {
      this.props.onError("please enter a valid quantity");
      return;
    }
    if (this.state.price < 1) {
      this.props.onError("please enter a valid price");
      return;
    }
    this.props.add(this.state);
    this.setState({
      product: "",
      price: "",
      quantity: 1,
    });
    this.props.onError("");
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            id="product"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Enter Price"
            id="price"
            onChange={this.handleChange}
            required
          />{" "}
          <input
            type="number"
            value={this.state.quantity}
            placeholder="Enter quantity"
            id="quantity"
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default addItem;
