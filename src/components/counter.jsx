import React, { Component } from "react";

class Counter extends Component {
  state = {
    arr0: [],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("counter - Unmount");
  }

  render() {
    var n, m;
    var num = new Array(12);
    var num0 = new Array(12);
    const {
      children,
      counter,
      onDelete,
      onIncrement,
      onDecrement,
      tet_dir,
      display,
    } = this.props;
    for (n = 0; n < 12; n++) num[n] = tet_dir[12 * this.formatCount() + n];
    for (m = 0; m < 12; m++) num0[m] = display[12 * this.formatCount() + m];

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    return (
      <div>
        {children}
        <p class="card-text">where is what</p>

        <div class="card-group">
          {num.map((n) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{n}</h5>
                <p class="card-text"></p>
                <p class="card-text">
                  <small class="text-muted"></small>
                </p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <p class="card-text">what is where</p>
        <div class="card-group">
          {num0.map((m) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{m}</h5>
                <p class="card-text"></p>
                <p class="card-text">
                  <small class="text-muted"></small>
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count;
  }
}

export default Counter;
