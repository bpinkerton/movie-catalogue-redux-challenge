export const listToRecord = (
  list: Array<Record<string, any>>,
  mapKey: string
) => {
  return list.reduce((prevValue, nextValue) => {
    prevValue[nextValue[mapKey]] = nextValue;
    return prevValue;
  }, {});
};
