export enum Direction {
  LEFT = 1,
  RIGHT = 2,
}

export interface ItemDetail {
  id: number;
  isChecked: boolean;
  value: string;
  currentSide: Direction;
}

export interface ListProps {
  values: ItemDetail[];
  setButtons: React.Dispatch<React.SetStateAction<ItemDetail[]>>;
}

export interface ActionProps {
  leftListItems: ItemDetail[];
  rightListItems: ItemDetail[];
  setLeftListItems: React.Dispatch<React.SetStateAction<ItemDetail[]>>;
  setRightListItems: React.Dispatch<React.SetStateAction<ItemDetail[]>>;
}
