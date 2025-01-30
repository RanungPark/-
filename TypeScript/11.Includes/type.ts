/*
  898 - Includes
  -------
  by null (@kynefuk) #쉬움 #array

  ### 질문

  JavaScript의 `Array.includes` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, `true` 또는 `false`를 반환해야 합니다.

  예시:

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > GitHub에서 보기: https://tsch.js.org/898/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

export type FirstExpression<X> = <T>() => T extends X ? 1 : 2;
export type SecondExpression<Y> = <P>() => P extends Y ? 1 : 2;

/**
 * Equal 유티릴티의 경우 FirstExoression과 SecondExpression의 조건이
 * 구조적으로 같으면 true를 다르면 false를 반환해는 유틸리티로 서브타입인지 확인한다.
 */
export type MyEqual<X, Y> = FirstExpression<X> extends SecondExpression<Y> ? true : false;

/**
 * 배열과 객체에서 [number]의 차이점
	
  -	배열에서는 [number]가 배열의 각 요소를 순회한다. 배열의 인덱스를 하나씩 처리하여 각 값을 검사하는 데 사용된다.
	- 객체에서는 [number]가 객체의 값들을 순회한다. keyof T가 객체의 키를 순회하고, [number]는 그 키에 해당하는 값을 하나씩 검사하는 데 사용된다.
 */
type Includes<T extends readonly any[], U> = true extends {
  [I in keyof T]: MyEqual<T[I], U>
}[number] ? true : false

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/898/answer/ko
  > 정답 보기: https://tsch.js.org/898/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
