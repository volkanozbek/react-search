import React from "react";

const Card = ({ monsters }) => {
  const { id, name, email } = monsters;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};

export default Card;
