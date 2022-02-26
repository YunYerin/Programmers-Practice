/*  작성하다가 시간이 많이 소요되어 다른사람 풀이 참조함
function solution(jobs) {
  var answer = 0
  let nowTime = 0 // 현재시점
  let sumOfWorkTime = 0 // 각 작업의 요청부터 종료까지 소요시간들의 합
  let sortedJobs = jobs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })
  // 요청시점 기준 오름차순 정렬,
  // [[0, 3], [1, 9], [2, 6]]

  let preliminaryWorks = []

  for (var i = 0; i < sortedJobs.length; i += 1) {
    if (nowTime <= sortedJobs[i][0]) {
      nowTime += sortedJobs[i][1]
      sumOfWorkTime += sortedJobs[i][1]
      for (var j = i+1; j < sortedJobs.length; j += 1) {
        if (nowTime > sortedJobs[j][0]) {
          preliminaryWorks.push(sortedJobs[j])
          preliminaryWorks.sort(function (a, b) {
            a[1] - b[1]
          })
        }
      }
    } else {
      var nowJob = preliminaryWorks.shift()
      nowTime += nowJob[1]
      sumOfWorkTime += nowTime - nowJob[0] + nowJob[1]
    }
  }
  answer = parseInt(sumOfWorkTime / jobs.length)
  return answer
}
 */

function solution(jobs) {
  let answer = 0,
    j = 0,
    time = 0
  jobs.sort((a, b) => {
    return a[0] - b[0]
  })

  const priorityQueue = []
  while (j < jobs.length || priorityQueue.length !== 0) {
    if (jobs.length > j && time >= jobs[j][0]) {
      priorityQueue.push(jobs[j++])
      priorityQueue.sort((a, b) => {
        return a[1] - b[1]
      })
      continue
    }
    if (priorityQueue.length !== 0) {
      time += priorityQueue[0][1]
      answer += time - priorityQueue[0][0]
      priorityQueue.shift()
    } else {
      time = jobs[j][0]
    }
  }
  return parseInt(answer / jobs.length)
}
