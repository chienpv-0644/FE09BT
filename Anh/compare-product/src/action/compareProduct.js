export function clickCompare(id) {
  console.log("lick id", id);
  return {
    type: "CLICK_COMPARE",
    id
  };
}
