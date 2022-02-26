function solution(array, commands) {
  var answer = []

  for (let i = 0; i < commands.length; i += 1) {
    const cuttedArr = array.slice(commands[i][0] - 1, commands[i][1])
    const sortedArr = cuttedArr.sort(function (a, b) {
      return a - b
    })
    answer.push(sortedArr[commands[i][2] - 1])
  }

  return answer
}
