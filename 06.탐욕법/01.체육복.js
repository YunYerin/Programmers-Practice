function solution(n, lost, reserve) {
  var answer = 0

  lost.sort((a, b) => {
    return a - b
  })

  for (var i = 0; i < lost.length; i += 1) {
    if (reserve.includes(lost[i])) {
      let steelIndex = reserve.indexOf(lost[i])
      if (steelIndex !== -1) {
        reserve.splice(steelIndex, 1)
        lost.splice(i, 1)
        i -= 1
      }
    }
  }

  const have = n - lost.length
  let reserveCopy = [...reserve]
  let count = 0

  for (var i = 0; i < lost.length; i += 1) {
    if (reserveCopy.includes(lost[i] - 1) && reserve.length) {
      let index = reserveCopy.indexOf(lost[i] - 1)
      if (index !== -1) {
        reserveCopy.splice(index, 1)
        count += 1
      }
    } else if (reserveCopy.includes(lost[i] + 1) && reserve.length) {
      let index = reserveCopy.indexOf(lost[i] + 1)
      if (index !== -1) {
        reserveCopy.splice(index, 1)
        count += 1
      }
    }
  }

  answer = have + count

  return answer
}
