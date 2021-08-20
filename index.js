// const record = [
//   { year: "2018", result: "L" },
//   { year: "2017", result: "W" },
//   { year: "2016", result: "N/A" }
//   //...
// ]

function superbowlWin(win) {
  let winningObj = win.find(item => item.result === 'W')
  return winningObj ? winningObj.year : undefined
}
console.log(record.find(superbowlWin))