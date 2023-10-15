import React from "react";
import "./CircularList.css";
import { ActionProps, ItemDetail } from "./PropsInterface";

const Actions = (props: ActionProps) => {
  const { leftListItems, rightListItems, setLeftListItems, setRightListItems } =
    props;

  const handleGtButtonChange = () => {
    let newRightListItems = [] as ItemDetail[];
    let newLeftListItems = [] as ItemDetail[];

    leftListItems?.map((item) => {
      if (!item?.isChecked) {
        newLeftListItems.push(item);
      } else {
        item.isChecked = !item.isChecked;
        newRightListItems.push(item);
      }
    });

    rightListItems?.map((item) => {
      if (item?.isChecked) {
        item.isChecked = !item.isChecked;
      }
      newRightListItems.push(item);
    });

    setLeftListItems(newLeftListItems);
    setRightListItems(newRightListItems);
  };
  const handleLtButtonChange = () => {
    let newRightListItems: ItemDetail[] = [] as ItemDetail[];
    let newLeftListItems: ItemDetail[] = [] as ItemDetail[];

    rightListItems?.map((item) => {
      if (!item?.isChecked) {
        newRightListItems.push(item);
        return item;
      } else {
        item.isChecked = !item.isChecked;
        newLeftListItems.push(item);
      }
    }) && ([] as ItemDetail[]);

    leftListItems?.map((item) => {
      if (item?.isChecked) {
        item.isChecked = !item.isChecked;
      }
      newLeftListItems.push(item);
    });

    setLeftListItems(newLeftListItems);
    setRightListItems(newRightListItems);
  };
  return (
    <div className="ActionStyling">
      <button
        className="ButtonStyle"
        value="<"
        title="<"
        aria-label="less than"
        onClick={(input) => handleLtButtonChange()}
      >
        &lt;
      </button>
      <button
        value=">"
        title=">"
        aria-label="greater than"
        onClick={(input) => handleGtButtonChange()}
      >
        &gt;
      </button>
    </div>
  );
};

export default Actions;
