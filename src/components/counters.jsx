import React, { Component } from "react";
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
          Compute
        </button>
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
