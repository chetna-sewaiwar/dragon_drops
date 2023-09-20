import React from 'react'
import { useState } from 'react';
const data = [
  { id: '1', content: 'Chetna' },
  { id: '2', content: 'Deghana' },
  { id: '3', content: 'Meghana' },
  { id: '4', content: 'Sneghana' },
];
const App = () => {
 const [items, setItems] = useState(data);
  const [draggedItem, setDraggedItem] = useState(null);
  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };
  const handleDragEnter = (e, targetItem) => {
    if (draggedItem === null) return;
    if (targetItem.id === draggedItem.id) return;
    const updatedItems = [...items];
    const draggedIndex = items.findIndex((item) => item.id === draggedItem.id);
    const targetIndex = items.findIndex((item) => item.id === targetItem.id);
    updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);
    setItems(updatedItems);
    setDraggedItem(null);
  };

  return (
    <div>
      <h1>Drag and Drop List</h1>
      <ol>
        {items.map((item) => (
          <li key={item.id} draggable onDragStart={(e) => handleDragStart(e, item)} onDragEnter={(e) => handleDragEnter(e, item)}>
            {item.content}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App