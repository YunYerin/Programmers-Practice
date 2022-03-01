function solution(answers) {
  var answer = []
  var person1 = [1, 2, 3, 4, 5]
  var count1 = 0
  var person2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var count2 = 0
  var person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  var count3 = 0

  for (var i = 0; i < answers.length; i += 1) {
    console.log(i)
    if (answers[i] === person1[i % person1.length]) {
      count1 += 1
    }

    if (answers[i] === person2[i % person2.length]) {
      count2 += 1
    }
    if (answers[i] === person3[i % person3.length]) {
      count3 += 1
    }
  }

  const result = [
    [1, count1],
    [2, count2],
    [3, count3],
  ]
  const sortedResult = result.sort((a, b) => {
    return b[1] - a[1]
  })
  const maxValue = sortedResult[0][1]

  for (var i = 0; i < sortedResult.length; i += 1) {
    if (sortedResult[i][1] === maxValue) {
      answer.push(sortedResult[i][0])
    }
  }

  return answer
}
