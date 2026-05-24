import assert from 'node:assert/strict';
import test from 'node:test';

import { readValue } from '#src/utils/readValue';
import { valueSuffixer } from '#src/utils/valueSuffixer/index';

void test('readValue uses mocked imported suffixer', async (t) => {
    const appendMock = t.mock.method(
        valueSuffixer,
        'append',
        (value: string, suffix: string) => `${value}[mock:${suffix}]`
    );

    const reader = {
        async readValue() {
            return await Promise.resolve('token');
        },
    };

    const result = await readValue(reader, 'session', 'fallback', ':suffix');

    assert.equal(result, 'token[mock::suffix]');
    assert.equal(appendMock.mock.callCount(), 1);
    assert.deepEqual(appendMock.mock.calls[0]!.arguments, ['token', ':suffix']);
});
