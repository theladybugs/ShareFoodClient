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
        name="selectedAdresse"
        onChange={e => props.onChange(e)}
      />
      <label htmlFor="">Fruits</label>
      <input
        name="selectedCategorie"
        type="radio"
        value="fruits"
        checked={props.fruits}
        onChange={e => props.onChangeChecked(e)}
      />
      <label htmlFor="">Légumes</label>
      <input
        name="selectedCategorie"
        value="légumes"
        type="radio"
        checked={props.légumes}
        onChange={e => props.onChangeChecked(e)}
      />
      <label htmlFor="">Epicerie</label>
      <input
        name="selectedCategorie"
        value="épicerie"
        type="radio"
        checked={props.épicerie}
        onChange={e => props.onChangeChecked(e)}
      />
      <label htmlFor="">Plats</label>
      <input
        name="selectedCategorie"
        value="plats"
        type="radio"
        checked={props.plats}
        onChange={e => props.onChangeChecked(e)}
      />
      <label htmlFor="">Tout</label>
      <input
        name="selectedCategorie"
        value=""
        type="radio"
        checked={props.tout}
        onChange={e => props.onChangeChecked(e)}
        defaultChecked
      />
    </div>
  );
}
