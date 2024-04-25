import "./Card.css";
import React from "react";
import pumpkin from "../../assets/pumpkin.jpg";
import heartOutline from "../../assets/heart-outline.png";
import heartFill from "../../assets/heart-fill.png";

type SwapCardProperties = {
  author: string;
  title: string;
  description: string;
  date: Date;
  liked: boolean;
  likeCount: number;
};

export class SwapCard extends React.Component<SwapCardProperties> {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="profile">
            <span className="letter">{this.props.author}</span>
          </div>
          <div className="card-title-group">
            <h5 className="card-title">{this.props.title}</h5>
            <div className="card-date">{this.props.date.toLocaleDateString()}</div>
          </div>
        </div>
        <img className="card-image" src={String(pumpkin)} alt="Logo" />
        <div className="card-text">{this.props.description}</div>
        <div className="card-like-bar">
          {this.props.liked ? (
            <img className="card-like-icon" src={String(heartFill)} alt="Logo" />
          ) : (
            <img className="card-like-icon" src={String(heartOutline)} alt="Logo" />
          )}
          <div className="like-text">
            <b>{this.props.likeCount}</b> people clicked on this heart. (Not really, this is a Math.random function)
          </div>
        </div>
      </div>
    );
  }
}
