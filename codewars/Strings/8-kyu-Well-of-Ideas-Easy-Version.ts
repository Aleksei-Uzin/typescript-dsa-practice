/**
 * Well of Ideas - Easy Version
 * https://www.codewars.com/kata/57f222ce69e09c3630000212/train/typescript
 *
 */

export function well(x: string[]): string {
  const count = x.filter(str => str === 'good').length

  if (count > 2) return 'I smell a series!'
  return count > 0 ? 'Publish!' : 'Fail!'
}
