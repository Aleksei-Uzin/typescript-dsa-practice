/**
 * Emojicode
 * https://www.codewars.com/kata/66279e3bcb95174d2f9cf050/train/typescript
 *
 */

const keycaps = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']

export const toEmojicode = (emojis: string): string =>
  [...emojis]
    .map(emoji => {
      const dec = emoji.codePointAt(0)!.toString()
      return dec.replace(/\d/g, m => keycaps[Number(m)])
    })
    .join(' ')

export const toEmojis = (emojicode: string): string =>
  emojicode
    .split(' ')
    .map(code => {
      const dec = keycaps.reduce((acc, key, d) => acc.replaceAll(key, String(d)), code)
      return String.fromCodePoint(Number(dec))
    })
    .join('')
