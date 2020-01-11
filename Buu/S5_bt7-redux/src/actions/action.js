export function increaseDish(idItem) {
  return {
    type: "INCREASE",
    idItem
  };
}

export function reductionDish(idItem) {
  return {
    type: "REDUCTION",
    idItem
  };
}

export function resetDish(total) {
  return {
    type: "RESET",
    total
  };
}
