import React, { Component } from "react";
import "./App.css";
import { computeArray } from "./components/compute";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { computePerms } from "./components/perms";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
    clicks: 0,
  };

  componentDidMount() {
    console.log("App - Mounted");
  }
  handleCompute = (P, tet_dir, r12, r13) => {
    console.log("Compute pressed");
    computePerms(P, tet_dir, r12, r13);
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    if (this.state.clicks > 22) {
      const counters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
      });
      this.setState({
        counters,
        clicks: (this.state.clicks = 0),
      });
    } else {
      this.setState({
        counters,
        clicks: this.state.clicks + 1,
      });
    }
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (this.state.clicks > 0) {
      this.setState({
        counters,
        clicks: this.state.clicks - 1,
      });
    } else {
    }
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters,
      clicks: (this.state.clicks = 0),
    });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleCreate = () => {
    this.setState({
      counters: [...this.state.counters, { value: 0 }],
    });
  };

  render() {
    var n, d, k;
    var tet_dir = new Array(288);
    var display = new Array(288);
    var P = new Array(60000);
    var r12 = 1;
    var r13 = 1;
    computeArray(tet_dir);

    for (d = 0; d < 24; d++) {
      for (n = 0; n < 12; n++) {
        k = tet_dir[12 * d + n];
        display[12 * d + k] = n;
      }
    }

    const {
      state,
      handleCreate,
      handleReset,
      handleIncrement,
      handleDecrement,
      handleDelete,
      handleCompute,
    } = this;
    return (
      <React.Fragment>
        <NavBar totalCounters={state.clicks} />

        <p>Formulation of tetrahedron orientations...</p>

        <main className="container">
          <Counters
            counters={state.counters}
            onReset={handleReset}
            onCompute={handleCompute(P, tet_dir, r12, r13)}
            onCreate={handleCreate}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            tet_dir={tet_dir}
            display={display}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
