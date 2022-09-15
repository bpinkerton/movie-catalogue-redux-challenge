import { CSSProperties, FC } from "react";
import ListItem, { ListItemProps } from "../atoms/ListItem";

const listStyles: CSSProperties = {
  backgroundColor: "#ececec",
  height: "100%",
  padding: "1em 0 0 0",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  margin: "unset"
};

type ListProps = {
  dataList: Omit<ListItemProps, "onItemClicked">[];
  selectedItemId: string;
  onItemSelected?: Function;
};

const List: FC<ListProps> = ({ dataList, selectedItemId, onItemSelected }) => {
  return (
    <ul style={listStyles}>
      {dataList.map(({ id, title }) => {
        return (
          <ListItem
            key={id}
            id={id}
            title={title}
            selected={id === selectedItemId}
            onItemClicked={onItemSelected}
          />
        );
      })}
    </ul>
  );
};

export default List;
