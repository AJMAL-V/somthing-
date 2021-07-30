import React from "react";

const Card = (props) => {
  const {
    name,
    Title,
    Year,
   imdbID,
    Type,
    Poster,
    preview
    

  } = props;

  return (
    <div className="card m-4 card-width active" >
      <img className="card-img-top" src={preview} alt="Card  cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{Year}</p>
      </div>
    </div>
  );
};

export default Card;