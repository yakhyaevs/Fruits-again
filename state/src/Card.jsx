import React from "react";
import "./fruits.css";
import "./index.css";
class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="img" src={this.props.src} alt="img" />
        <h3 className="title">{this.props.title}</h3>
      </div>
    );
  }
}
export default Card;
