import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('reference prefix', () => {
  assert.deepEqual(
    Array.from({ length: 10 }, (_, i) => api.fibonacci(i)),
    [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n],
  );
});
test('zero index', () => {
  assert.equal(api.fibonacci(0), 0n);
});
test('recurrence or independent count', () => {
  for (let n = 2; n < 100; n++)
    assert.equal(api.fibonacci(n), api.fibonacci(n - 1) + api.fibonacci(n - 2));
});
test('upper bound', () => {
  assert.equal(typeof api.fibonacci(5000), 'bigint');
});
test('invalid ranges', () => {
  assert.throws(() => api.fibonacci(-1));
  assert.throws(() => api.fibonacci(5001));
  assert.throws(() => api.fibonacci(1.5));
});
test('type contract', () => {
  assert.throws(() => api.fibonacci('2'));
});
