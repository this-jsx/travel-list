export default function Stat({ items }) {
  const numItems = items.length;
  const itemsPacked = items.filter(items => items.packed).length;
  const isPacked = Math.round(itemsPacked / numItems * 100);

  return <footer className="stats">
    <em>
      {numItems === 0 ? 'You haven\'t started to pack yet :-)' : isPacked === 100 ? 'You got everything. Ready to go 🌏' : `You have ${numItems} items on your list, and you already packed ${itemsPacked} items (${isPacked}%)`}
    </em>
  </footer>;
}
