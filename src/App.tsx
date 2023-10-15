import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CircularList from "./CircularList";
import Actions from "./Actions";
import { ItemDetail, Direction } from "./PropsInterface"; // Assuming ItemDetail and Direction are imported correctly

function App() {
  const items: number[] = [1, 2, 3, 4];
  const [leftListItems, setLeftListItems] = useState<ItemDetail[]>(
    items.map((item) => {
      return {
        id: item,
        isChecked: false,
        value: item.toString(),
        currentSide: Direction.LEFT,
      };
    })
  );

  const [rightListItems, setRightListItems] = useState<ItemDetail[]>([]);
  console.log(leftListItems);
  console.log(rightListItems);
  return (
    <div className="App flex">
      <CircularList values={leftListItems} setButtons={setLeftListItems} />
      <Actions
        leftListItems={leftListItems}
        rightListItems={rightListItems}
        setLeftListItems={setLeftListItems}
        setRightListItems={setRightListItems}
      />
      <CircularList values={rightListItems} setButtons={setRightListItems} />
    </div>
  );
}

export default App;
