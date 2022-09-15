import { CSSProperties, FC } from "react";

const listItemStyle = (selected?: boolean): CSSProperties => {
  return {
    backgroundColor: selected ? "#a9b3c4" : "#ececec",
    fontWeight: selected ? "bold" : "normal",
    cursor: "pointer",
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    color: "#1a1a1a",
    border: "unset",
    textAlign: "left"
  };
};

export type ListItemProps = {
  id: string;
  title: string;
  selected?: boolean;
  onItemClicked: Function;
};

const ListItem: FC<ListItemProps> = ({
  id,
  title,
  selected,
  onItemClicked
}) => {
  return (
    <button
      onClick={() => {
        onItemClicked(id);
      }}
      style={listItemStyle(selected)}
    >
      {title}
    </button>
  );
};

export default ListItem;
