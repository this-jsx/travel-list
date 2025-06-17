export default function Item({ el, onDeleteItems, onToggleItem }) {
  return <li>
    <input type="checkbox" value={el.checked} onChange={() => onToggleItem(el.id)} />
    <span style={el.packed ? { textDecoration: 'line-through' } : {}}>
      {el.quantity} {el.itemTitle}
    </span>
    <button onClick={() => onDeleteItems(el.id)}>❌</button>
  </li>;
}
