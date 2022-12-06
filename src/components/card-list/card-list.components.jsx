import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <>
        {monsters.map((monsters) => {
          return <h4>{monsters.name}</h4>;
        })}
      </>
    );
  }
}

export default CardList;
