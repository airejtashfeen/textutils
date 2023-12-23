import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter Text Here!');

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLcClick=()=>{
   setText(text.toLowerCase());
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-secondary mx-3" onClick={handleLcClick}>
       Convert to Lowercase
      </button>
    </div>
  );
}
