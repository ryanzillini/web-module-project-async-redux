import React from "react";

const Gif = (props) => {
  const { gif } = props;

  return (
    <div className="gifItem">
      <h3>gif title</h3>
      <p>gif description</p>
      <p>gif author</p>
      <img src=""></img>
    </div>
  );
};
