function solution(citations) {
  var answer = 0

  const sumValue = citations.reduce((sum, p) => sum + p, 0)

  if (sumValue === 0) {
    answer = 0
  } else {
    for (var i = 0; i < citations.length + 2; i += 1) {
      const filteredCitations = citations.filter(citation => citation >= answer)
      if (answer > filteredCitations.length) {
        answer = answer - 1
        break
      } else {
        answer += 1
      }
    }
  }

  return answer
}
