import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('computes known distance', () => {
  assert.equal(api.levenshteinDistance('kitten', 'sitting'), 3);
});
test('returns zero for equality', () => {
  assert.equal(api.levenshteinDistance('same', 'same'), 0);
});
test('counts insertion', () => {
  assert.equal(api.levenshteinDistance('cat', 'cart'), 1);
});
test('counts deletion', () => {
  assert.equal(api.levenshteinDistance('cart', 'cat'), 1);
});
test('counts Unicode code points', () => {
  assert.equal(api.levenshteinDistance('😀a', '😀b'), 1);
});
test('handles empty strings', () => {
  assert.equal(api.levenshteinDistance('', 'abc'), 3);
});
