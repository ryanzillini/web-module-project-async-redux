import React from "react";

const Gif = (props) => {
  const { gif } = props;

  return (
    <div className="gifItem">
      <h3>{gif.title}</h3>
      <p>{gif.username}</p>
      <p>{gif.author}</p>
      <img src={gif.images.original.url}></img>
      <a href={gif.url}>Check It Out On Griphy</a>
    </div>
  );
};

export default Gif;
