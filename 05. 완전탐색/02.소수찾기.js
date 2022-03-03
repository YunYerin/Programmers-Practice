// 다른사람 풀이 참조하였음

function solution(numbers) {
  let answer = 0
  let primeNumbers = []

  const numbersArr = numbers.split('') // 쪼개진 숫자들

  // 소수 판별 함수
  const determinePrime = num => {
    let count = 0
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) {
        count += 1
      }
      if (count >= 3) {
        break
      }
    }
    if (count === 2 && !primeNumbers.includes(num)) {
      primeNumbers.push(num)
    }
  }

  // 숫자 만들기
  const mergeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr]
        temp.splice(i, 1) // 배열의 i번째 index값을 삭제
        // console.log("arr : ",arr, "str :",str, "i :", i ,"temp : ",temp);
        mergeNumbers(temp, str + arr[i])
      }
    }

    if (str.length > 0) {
      // console.log("str :",str);
      determinePrime(Number(str))
    }
  }

  mergeNumbers(numbersArr, '')

  // console.log("primeNumbers : ",primeNumbers)
  answer = primeNumbers.length
  return answer
}
