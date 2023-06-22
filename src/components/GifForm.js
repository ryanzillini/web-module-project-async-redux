import React from "react";
import { connect } from "react-redux";
import { getGifs } from "../actions";
import { useState } from "react";

const GifForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { getGifs } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getGifs(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

export default connect(null, { getGifs })(GifForm);
