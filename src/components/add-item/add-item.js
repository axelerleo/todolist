import React, { Component } from "react";
import "./add-item.css";
class AddItem extends Component {
  state = { label: "" };

  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({ label: "" });
  };

  render() {
    return (
      <form className="add-item-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="what to do next?"
          value={this.state.label}
        />
        <button type="submit" className="btn btn-outline-warning">
          <i className="fa fa-plus-square plus-lg" />
        </button>
      </form>
    );
  }
}

export default AddItem;
