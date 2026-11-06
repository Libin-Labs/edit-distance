export function levenshteinDistance(left: string, right: string): number {
  if (typeof left !== 'string' || typeof right !== 'string')
    throw new TypeError('Expected strings');
  let a = Array.from(left),
    b = Array.from(right);
  if (a.length > 10000 || b.length > 10000) throw new RangeError('Input too long');
  if (a.length > b.length) [a, b] = [b, a];
  let previous = Array.from({ length: a.length + 1 }, (_, i) => i);
  for (let row = 1; row <= b.length; row++) {
    const current = [row];
    for (let col = 1; col <= a.length; col++)
      current[col] = Math.min(
        current[col - 1]! + 1,
        previous[col]! + 1,
        previous[col - 1]! + (a[col - 1] === b[row - 1] ? 0 : 1),
      );
    previous = current;
  }
  return previous[a.length]!;
}
