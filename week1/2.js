/**
 * Array Sort 和 Quick Sort的性能差距
 * 
 */

const array = Array.from(Array(10000), x => parseInt(Math.random() * 1000))
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
  const partition = (arr, left, right) => {
    // 分区操作
    var pivot = left, // 设定基准值（pivot）
      index = pivot + 1;
    for (var i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        index++;
      }
    }
    [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
    return index - 1;
  }
  const quickSort = (arr, left, right) => {
    let partitionIndex;
      if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
      }
      return arr;
  }

  console.time("测试Quick Sort")
  quickSort(testArray, 0, testArray.length - 1)
  console.log(testArray)
  console.timeEnd("测试Quick Sort")
}

testArraySort()
testQuickSort()