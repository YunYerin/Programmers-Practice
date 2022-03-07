function solution(brown, yellow) {
  var answer = []
  let sumYellowRowAndCol = (brown - 4) / 2
  // console.log(sumYellowRowAndCol)

  for (var i = 1; i <= yellow; i += 1) {
    if (
      yellow % i === 0 &&
      yellow / i + i === sumYellowRowAndCol &&
      yellow / i >= i
    ) {
      console.log(i)
      answer.push(yellow / i + 2)
      answer.push(i + 2)
      break
    }
  }
  return answer
}
