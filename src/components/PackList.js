import { useState } from "react";
import Item from "./Item";

export default function PackList({ onDeleteItems, items, onToggleItem, onClearList }) {

  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'itemTitle') {
    sortedItems = items.slice().sort((a, b) => a.itemTitle.localeCompare(b.itemTitle));
  }

  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => +b.packed - +a.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(
          elem => <Item el={elem} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem} key={elem.id} onClearList={onClearList} />
        )}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort by order</option>
          <option value='itemTitle'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        {items.length > 0 && <button onClick={onClearList}>Clear list</button>}
      </div>
    </div>
  );
}
