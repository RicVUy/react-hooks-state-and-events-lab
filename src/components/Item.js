import React, {useState} from "react";

function Item({ name, category }) {
  const [text, setText] = useState("Add to Cart");

  function handleButtonText() {
    setText(text === "Add to Cart" ? "Remove from Cart" : "Add to Cart");
  }

  const appClass = text === "Add to Cart" ? "" : "in-cart";

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonText}>
        {text}
      </button>
    </li>
  );
}

export default Item;
