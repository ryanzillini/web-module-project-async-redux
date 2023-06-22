import React from "react";
import "./App.css";
import { getGifs } from "./actions";
import GifForm from "./components/GifForm";
import GifList from "./components/GifList";
import { connect } from "react-redux";

function App(props) {
  const { loading, error, getGifs } = props;

  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <GifForm />
      {error && <h3>{error}</h3>}
      {loading ? <h3>We are loading</h3> : <GifList />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getGifs })(App);
