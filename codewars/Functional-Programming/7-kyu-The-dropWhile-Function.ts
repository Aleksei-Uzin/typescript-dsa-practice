/**
 * The dropWhile Function
 * https://www.codewars.com/kata/54f9c37106098647f400080a/train/typescript
 *
 */

export function dropWhile<T>(array: T[], predicate: (e: T) => boolean): T[] {
  let ind = 0

  while (ind < array.length && predicate(array[ind])) {
    ind += 1
  }

  return array.slice(ind)
}
