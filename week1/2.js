/**
 * Array Sort 和 Quick Sort的性能差距
 * 
 */

const array = Array.from(Array(10), x => parseInt(Math.random() * 1000))
console.log(array)

function testArraySort() {
  const testArray = [...array];
  console.time("测试Array Sort")
  testArray.sort((a, b) => a - b)
  // console.log(testArray)
  console.timeEnd("测试Array Sort")
}

function testQuickSort() {
  const testArray = [...array];
  const quickSort = (arr, low, high) => {
    // 分别对左右部分递归排序
    if (low < high) {
      let l = low
      let h = high
      let pivot = arr[low]
      while (l < h) {
        while (l < h && arr[h] > pivot) high--
        while (l < h && arr[l] < pivot) low++
        [arr[h], arr[l]] = [arr[l], arr[h]]
      }
      quickSort(arr, low, l - 1)
      quickSort(arr, l + 1, high)
    }
  }

  console.time("测试Quick Sort")
  quickSort(testArray, 0, testArray.length - 1)
  console.log(testArray)
  console.timeEnd("测试Quick Sort")
}

testArraySort()
// testQuickSort()