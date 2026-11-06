import { fibonacci } from '@lp-labs/fibonacci-sequence';
if (fibonacci(9) !== 34n) throw new Error('Sequence');
// @ts-expect-error invalid argument must be rejected by declarations
fibonacci('2');
