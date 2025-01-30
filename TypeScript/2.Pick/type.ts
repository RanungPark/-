/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #쉬움 #union #built-in

  ### 질문

  `T`에서 `K` 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Pick<T, K>`을 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > GitHub에서 보기: https://tsch.js.org/4/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * 알게된것

keyof는 객체 형태의 타입을 따로 속성만 뽑아내어 유니온 타입으로 만들어주는 연산자이다

typeof는 값을 기반으로 객체의 데이터를 객체 타입으로 변환해주는 연산자이다
즉 객체의 타입에는 적용이 되지 않고 값을 가진 객체에만 적용이 가능하다
 */
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k];
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/4/answer/ko
  > 정답 보기: https://tsch.js.org/4/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
