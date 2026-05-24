import assert from 'node:assert/strict';
import test from 'node:test';

void test('valueSuffixer can use a mocked JSON module', async (t) => {
    t.mock.module('#src/utils/valueSuffixer/config.json', {
        cache: true,
        defaultExport: {
            defaultSuffix: ':mocked-json',
        },
    });

    const { default: mockedConfig } = await import('#src/utils/valueSuffixer/config.json', {
        with: { type: 'json' },
    });
    const { defaultValueSuffix, valueSuffixer } = await import('#src/utils/valueSuffixer/index');

    assert.deepEqual(mockedConfig, { defaultSuffix: ':mocked-json' });
    assert.equal(defaultValueSuffix, ':mocked-json');
    assert.equal(valueSuffixer.append('token'), 'token:mocked-json');
});
