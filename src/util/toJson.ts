import { dehydrate } from "react-query";

export const replacerFunc = () => {
  const visited = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return;
      }
      visited.add(value);
    }
    return value;
  };
};

export const toJson = (queryClient) => {
  return JSON.parse(JSON.stringify(dehydrate(queryClient), replacerFunc()));
};
