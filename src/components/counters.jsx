import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onCreate,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      tet_dir,
      display,
      onCompute,
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onCompute} className="btn btn-primary btn-sm m-2">
          link to permutations will go here
        </button>
        <a href="https://black-copilot-315217.oa.r.appspot.com/">
          Visit Wonder_Wave on Google Cloud
        </a>
        

        <p></p>
        <button onClick={onCreate} className="btn btn-primary btn-sm m-2">
          Create
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            display={display}
            tet_dir={tet_dir}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
