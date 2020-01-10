import React from "react";

import "./App.css";

import Jobs from "./components/jobs";

const mockJobs = [
  { title: "SWE 1", company: "Rippling" },
  { title: "SWE 1", company: "Google" },
  { title: "SWE 1", company: "Facebook" }
];

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
