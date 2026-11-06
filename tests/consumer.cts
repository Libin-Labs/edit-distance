import * as api from '@lp-labs/edit-distance';
import { levenshteinDistance } from '@lp-labs/edit-distance';
console.log(levenshteinDistance('kitten', 'sitting'));
// @ts-expect-error invalid argument must be rejected by declarations
api.levenshteinDistance(1, 'text');
