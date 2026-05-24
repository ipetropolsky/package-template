import assert from 'node:assert/strict';
import test from 'node:test';

import { defaultValueSuffix, valueSuffixer } from '#src/utils/valueSuffixer/index';

void test('valueSuffixer uses JSON config by default', () => {
    assert.equal(defaultValueSuffix, ':json');
    assert.equal(valueSuffixer.append('token'), 'token:json');
});
