import "./card-list.styles.css";
import "./card.styles.css";
import Card from "./../card-box/card.components";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monsters) => {
        return <Card monsters={monsters} />;
      })}
    </div>
  );
};

export default CardList;
