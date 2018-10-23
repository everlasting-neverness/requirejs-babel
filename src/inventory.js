define(() => {
  let itemsAmount = 10;
  return {
    decrement: () => {
      itemsAmount = itemsAmount - 1;
    }
  };
});
