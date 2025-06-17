import { useState } from "react";

export default function Form({ onAddItems }) {

  const [itemTitle, setItemTitle] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemTitle) return;

    const newItem = { itemTitle, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setItemTitle('');
    setQuantity(1);
  }

  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your trip?</h3>

    <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
      {Array.from({ length: 20 }, (_, i) => <option key={i}>{i + 1}</option>)}
    </select>
    <input type="text" placeholder="Item" value={itemTitle} onChange={(e) => setItemTitle(e.target.value)} />
    <button>Add</button>
  </form>;
}
