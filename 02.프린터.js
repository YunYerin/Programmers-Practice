/*
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
*/

function solution(priorities, location) {
  var answer = 0
  let indexAndPriority = []

  for (var i = 0; i < priorities.length; i += 1) {
    indexAndPriority.push([i === location, priorities[i]])
  }

  console.log(indexAndPriority)
  let count = 0

  while (true) {
    let firstPage = indexAndPriority.shift()
    if (indexAndPriority.some(el => el[1] > firstPage[1])) {
      indexAndPriority.push(firstPage)
    } else {
      count += 1
      if (firstPage[0] === true) {
        answer = count
        break
      }
    }
  }

  return answer
}
