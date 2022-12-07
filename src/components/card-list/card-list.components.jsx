import { Component } from "react";
import "./card-list.styles.css";
import "./card.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monsters) => {
          return (
            <div className="card-container">
              <img
                src={`https://robohash.org/${monsters.id}set=set2&size=180x180`}
                alt={`monster ${monsters.name}`}
              />
              <h4>{monsters.name}</h4>
              <p>{monsters.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
