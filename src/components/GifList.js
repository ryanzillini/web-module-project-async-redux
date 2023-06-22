import React from "react";
import { connect } from "react-redux";
import Gif from "./Gif";

const GifList = (props) => {
  const { gifs } = props;
  return (
    <div className="gifList">
      {gifs.map((gif) => {
        return <Gif key={gif.id} gif={gif} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs,
  };
};

export default connect(mapStateToProps)(GifList);
