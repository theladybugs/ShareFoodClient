import React from "react";

export default function SearchBox(props) {
  return (
    <div>
      <input
        type="text"
        name="selectedText"
        onChange={e => props.onChange(e)}
      />
      <input
        type="text"
        name="selectedText"
        onChange={e => props.onChange(e)}
      />
    </div>
  );
}
