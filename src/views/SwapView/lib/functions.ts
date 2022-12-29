export const handleSwap = (value: string, rate: number) => {
  let value1 = "";
  let value2 = "";
  if (value === "") {
    value1 = "";
    value2 = "";
  } else {
    value1 = value;
    value2 = (Number(value) * rate).toString();
  }

  return { value1, value2 };
};
