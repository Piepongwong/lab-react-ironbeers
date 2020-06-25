import React from "react";

function LinkComponent(props) {
  return (
    <div className="card">
      <img src={props.image} />
      <div className="card-content">
        <h4 className="card-title">{props.name}</h4>
      </div>
    </div>
  );
}

export default LinkComponent;
