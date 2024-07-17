import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  
  render() {
    const {image,name}=this.props;
    return <div className="anime-card">
      <img src={image} alt={name} />
        <p>{name}</p>
    </div>;
  }
}

export default AnimeCard;
