import React, { useState } from "react";

const Slides = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [last, setLast] = useState(false);

  const moveHandle = (move) => {
    if(move === 0) setLast(false)
    if(move === slides.length-1) setLast(true)
    setCurrent(move)
  }

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" disabled={current === 0} onClick={()=>setCurrent(0)}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" disabled={current === 0}>
          Prev
        </button>
        <button data-testid="button-next" className="small" disabled={last} onClick={()=>moveHandle(current+1)}>
          Next
        </button>
      </div>

      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[current].title}</h1>
        <p data-testid="text">{slides[current].text}</p>
      </div>
    </div>
  );
};

export default Slides;
