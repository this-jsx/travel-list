import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackList from "./PackList";
import Stat from "./Stat";

function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you wanna delete all the items?')

    if(items.length <= 0) return

    if(confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackList items={items} onDeleteItems={handleDeleteItems} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stat items={items} />
    </div>
  );
}

export default App;
