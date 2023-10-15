import React from "react";
import "./CircularList.css";
import { ItemDetail, ListProps } from "./PropsInterface";

const CircularList = (props: ListProps) => {
  const { values, setButtons } = props;

  const handleChange = (item: ItemDetail) => {
    let newValues: ItemDetail[] = values;
    newValues = newValues?.map((item1) => {
      if (item1 === item) {
        item1.isChecked = !item.isChecked;
      }
      return item1;
    });
    setButtons(newValues);
  };

  return (
    <div className="CircularList">
      {values?.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            name="remember"
            checked={item?.isChecked}
            defaultChecked={item?.isChecked}
            onChange={(input) => handleChange(item)}
            value={item?.value}
          />
          <label>{item?.value}</label>
        </div>
      ))}
    </div>
  );
};

export default CircularList;
