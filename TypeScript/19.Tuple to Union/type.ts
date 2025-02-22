/*
  10 - Tuple to Union
  -------
  by Anthony Fu (@antfu) #보통 #infer #tuple #union

  ### 질문

  튜플 값으로 유니온 타입을 생성하는 제네릭 `TupleToUnion<T>`를 구현하세요.

  예시:

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  > GitHub에서 보기: https://tsch.js.org/10/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
/**
 * 다른 정답
 * 
 * T가 배열 이나 튜플 타입일때 T[number]는 배열 또는 튜플의 모든 인덱스에 해당하는 타입의 집합을 반환한다
 * 
 * 객체일때 값을 반환하고 싶다면 T[keyof T]를 이용해야한다
 * 
 * type TupleToUnion<T extends readonly unknown[]> = T extends Array<infer U> ? U : never
 * 
 * type TupleToUnion<T extends readonly unknown[]> = T extends [infer U, ...arg: infer P] ? U|TupleToUnion<P> : never
 */
type TupleToUnion<T extends readonly unknown[]> = T[number] 

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/10/answer/ko
  > 정답 보기: https://tsch.js.org/10/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
