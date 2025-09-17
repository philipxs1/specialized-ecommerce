const formatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});

export const formatPrice = (price: number) => {
  return formatter.format(price);
};

export const range = (
  start: number,
  end: number,
  step: number = 1,
): number[] => {
  let output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
