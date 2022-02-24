/*
 ** 실행시간이 오래걸려서 테스트 통과 실패 **
function solution(operations) {
  var answer = []
  let queue = []

  for (let i = 0; i < operations.length; i = +1) {
    let nowOperation = operations[i].slice(0, 1)
    if (nowOperation === 'I') {
      let number = Number(operations[i].substring(2)) // I 뒤의 숫자 추출
      queue.push(number) // 숫자 추가
      queue.sort(function (a, b) {
        return a - b
      }) // 오름차순으로 queue 정렬

    } else if (nowOperation === 'D') {
      if (queue.length === 0) {
        return
      } else {
        if (operations[i].substring(2, 3) === '-') {
          // 큐에서 최댓값 삭제
          queue.pop()
        } else {
          // 큐에서 최소값 삭제
          queue.shift()
        }
      }

    }
  }

  if (queue.length === 0) {
    answer = [0, 0]
  } else {
    answer = [queue[queue.length - 1], queue[0]]
  }

  return answer
}
*/
function solution(operations) {
  let answer = []
  for (let i = 0; i < operations.length; i++) {
    const num = Number(operations[i].substring(2))
    switch (operations[i].substring(0, 1)) {
      case 'I':
        answer.push(num)
        answer.sort((a, b) => {
          return a - b
        })
        break
      case 'D':
        if (num === 1) {
          answer.pop()
        } else {
          answer.shift()
        }
        break
    }
  }
  if (answer.length === 0) {
    return [0, 0]
  }

  return [answer[answer.length - 1], answer[0]]
}
