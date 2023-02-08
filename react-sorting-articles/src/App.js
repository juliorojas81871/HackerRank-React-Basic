import React, { useState, useMemo } from "react";
import "./App.css";

import Articles from "./components/Articles";

const title = "Sorting Articles";
  
function App({ articles }) {
  const [list, setList] = useState(articles)
  const [type, setType] = useState("upvotes")
  
  const sortHandle = useMemo(() => {
    return [...list].sort((a,b) => a[type] > b[type] ? -1 : 1)
  },[list, type])

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button data-testid="most-upvoted-link" className="small" onClick={()=>setType("upvotes")}>
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" className="small" onClick={()=>setType("date")}>
          Most Recent
        </button>
      </div>
      <Articles articles={sortHandle} />
    </div>
  );
}

export default App;
