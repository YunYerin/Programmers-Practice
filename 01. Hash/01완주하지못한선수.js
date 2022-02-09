var bucket = []
var convertToIndex = function (str, max) {
  var hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
    hash = hash & hash // Convert to 32bit integer
    hash = Math.abs(hash)
  }
  return hash % max
}

function makeHashTable(participant, completion) {
  var dupCompletion = []
  for (var i = 0; i < participant.length; i = i + 1) {
    if (!completion.includes(participant[i])) {
      var index = convertToIndex(participant[i], 30)
      bucket[index] = 'fail'
    } else {
      if (!dupCompletion.includes(participant[i])) {
        dupCompletion.push(participant[i])
        var index = convertToIndex(participant[i], 30)
        bucket[index] = 'pass'
      } else {
        var index = convertToIndex(participant[i], 30)
        bucket[index] = 'fail'
      }
    }
  }
  return bucket
}

function solution(participant, completion) {
  var answer = ''
  makeHashTable(participant, completion)
  for (var j = 0; j < participant.length; j = j + 1) {
    var index = convertToIndex(participant[j], 30)
    if (bucket[index] === 'fail') {
      answer = participant[j]
      return answer
    }
  }
}
