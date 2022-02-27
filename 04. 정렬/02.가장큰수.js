function solution(numbers) {
  var answer = ''
  let count = 0

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === 0) {
      count += 1
    }
  }

  if (count === numbers.length) {
    answer = '0'
  } else {
    for (let i = 0; i < numbers.length; i += 1) {
      numbers[i] = String(numbers[i])
    }
    numbers.sort(function (a, b) {
      if (a + b < b + a) {
        return 1
      } else if (a + b > b + a) {
        return -1
      } else {
        return 0
      }
    })

    for (var i = 0; i < numbers.length; i += 1) {
      answer += numbers[i]
    }
  }

  return answer
}
