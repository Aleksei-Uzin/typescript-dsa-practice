/**
 * Get the Middle Character
 * https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript
 *
 */

export function getMiddle(s: string): string {
  const mid = Math.floor(s.length / 2)
  return s.slice(mid - ((s.length % 2) ^ 1), mid + 1)
}
