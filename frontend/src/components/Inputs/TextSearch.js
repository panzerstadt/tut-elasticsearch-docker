import React, { useState } from "react";

const TextSearch = ({ onQuery }) => {
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
    // sanitization if needed here
    onQuery && onQuery(e.target.value);
  };

  return <input value={text} onChange={handleChange}></input>;
};

export default TextSearch;
