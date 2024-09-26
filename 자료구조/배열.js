// 빈 Array를 생성할 경우
const arr1 = [];
console.log(arr1);

// 미리 초기화된 Array를 생성할 경우
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

// 많은 값을 같은 값으로 초기화할 때 경우
const arr3 = Array.from({ length: 10 }, () => 0);
const arr4 = Array(10).fill(0);
console.log(arr3);
console.log(arr4);

//특정 로직을 사용하여 초기화 할 경우
const arr5 = Array.from({ length: 100 }, (_, i) => i);
const arr6 = Array.from(arr2, v => v * 2);
console.log(arr5);
console.log(arr6);

const arr = [1, 2, 3];

arr.push(4);
console.log(arr);

arr.push(5, 6);
console.log(arr);

arr.splice(3, 0, 128);
console.log(arr);

arr.splice(3, 1);
console.log(arr);

arr['string'] = 'string';

arr[false] = 0;
console.log(arr);
